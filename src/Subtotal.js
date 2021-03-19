import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router-dom';

function Subtotal() {
	const history = useHistory();
	const [state, dispatch] = useStateValue();
	let mask = 0;
	for (let i = 0; i < state.basket.length; i++) {
		if (state.basket[i].id === 'whole') {
			mask += 10;
		} else {
			mask += 1;
		}
	}

	let totalPrice = 0;
	for (let i = 0; i < mask; i++) {
		if (mask < 10) {
			totalPrice += 8.65;
		} else {
			totalPrice += 8;
		}
	}

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={value => (
					<>
						<p>
							Subtotal ( {mask} items ):{' '}
							<strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" />
							This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={totalPrice}
				displayType={`text`}
				thousandSeparator={true}
				prefix={`$`}
			/>
			<button
				onClick={e => {
					history.push('/payment');
					/*
					if (state.user) {
						history.push('/payment');
					} else if (!state.user) {
						history.push('/login');
					}
					*/
				}}>
				Proceed to checkout
			</button>
		</div>
	);
}

export default Subtotal;
