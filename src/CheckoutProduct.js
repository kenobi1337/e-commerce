import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({
	id,
	image,
	title,
	price,
	rating,
	hideButton
}) {
	const [{ basket }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		// remove item from basket
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id: id
		});
	};

	let mask = 0;
	for (let i = 0; i < basket.length; i++) {
		if (basket[i].id === 'whole') {
			mask += 10;
		} else {
			mask += 1;
		}
	}

	let finalPrice = price;
	if (mask >= 10) {
		finalPrice = 10;
	}
	if (id === 'whole') {
		finalPrice = 100;
	}

	return (
		<div className="checkoutProduct">
			<img
				alt="product in the cart"
				src={image}
				className="checkoutProduct__image"
			/>
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">
					{title}
				</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{finalPrice}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>⭐</p>
						))}
				</div>
				{!hideButton && (
					<button onClick={removeFromBasket}>
						Remove from basket
					</button>
				)}
			</div>
		</div>
	);
}

export default CheckoutProduct;
