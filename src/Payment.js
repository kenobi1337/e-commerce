import React, { useState, useEffect } from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';
import {
	CardElement,
	useStripe,
	useElements
} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from './axios';
import { db } from './firebase';

function Payment() {
	const history = useHistory();
	const [
		{ basket, user, address },
		dispatch
	] = useStateValue();

	const stripe = useStripe();
	const elements = useElements();

	const [addresses, setAddresses] = useState('');

	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState(
		true
	);

	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState('');

	let totalPrice = 0;
	for (let i = 0; i < basket.length; i++) {
		totalPrice += parseFloat(basket[i].price);
		totalPrice =
			Math.round(totalPrice * 100) / 100;
	}

	useEffect(() => {
		// generate special stripe secret
		const getClientSecret = async () => {
			const response = await axios({
				method: 'post',
				url: `/payments/create?total=${
					totalPrice * 100
				}`
			});
			setClientSecret(
				response.data.clientSecret
			);
		};

		getClientSecret();
	}, [basket]);

	const changeAddress = e => {
		setAddresses(e.target.value);
		dispatch({
			type: 'ADD_ADDRESS',
			address: addresses
		});
	};

	const handleSubmit = async event => {
		// do stripe pay
		event.preventDefault();
		setProcessing(true);

		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(
						CardElement
					)
				}
			})
			.then(async ({ paymentIntent }) => {
				// payment intent = payment confirmation

				db.collection('users')
					.doc(user?.uid)
					.collection('orders')
					.doc(paymentIntent.id)
					.set({
						basket: basket,
						amount: paymentIntent.amount,
						buyerAddress: address,
						created: paymentIntent.created
					});

				setSucceeded(true);
				setError(null);
				setProcessing(false);

				dispatch({
					type: 'EMPTY_BASKET'
				});

				history.replace('/orders');
			});
	};

	const handleChange = e => {
		// listen for change in card element
		// and display any error for customers
		setDisabled(e.empty);
		setError(e.error ? e.error.message : '');
	};
	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout (
					<Link to="/checkout">
						{basket?.length} items
					</Link>
					)
				</h1>

				{/* delivery */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>1936 Normandy Dr</p>
						<p>Miami Beach FL 33141</p>
					</div>
				</div>
				{/* review item */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>
							Review items and delivery
						</h3>
					</div>
					<div className="payment__items">
						{basket.map(item => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				{/* payment */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment__details">
						{/* strip payment */}
						<form onSubmit={handleSubmit}>
							<input
								value={addresses}
								onChange={
									changeAddress
								}></input>
							<CardElement
								onChange={handleChange}
							/>
							<div className="payment__priceContainer">
								<CurrencyFormat
									renderText={value => (
										<>
											<h3>
												Order
												Total:{' '}
												{value}
											</h3>
										</>
									)}
									decimalScale={2}
									value={totalPrice}
									displayType={`text`}
									thousandSeparator={
										true
									}
									prefix={`$`}
								/>
								<button
									disabled={
										processing ||
										disabled ||
										succeeded
									}>
									<span>
										{processing ? (
											<p>
												Processing
											</p>
										) : (
											'Buy Now!'
										)}
									</span>
								</button>
							</div>

							{error && (
								<div>{error}</div>
							)}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
