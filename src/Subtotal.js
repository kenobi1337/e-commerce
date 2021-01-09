import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router-dom';

function Subtotal() {
	const history = useHistory();
	const [state, dispatch] = useStateValue();
	let totalPrice = 0;
	for (let i = 0; i < state.basket.length; i++) {
		totalPrice += parseFloat(state.basket[i].price);
		totalPrice = Math.round(totalPrice * 100) / 100;
	}

	return (
		<div className='subtotal'>
			<CurrencyFormat
				renderText={value => (
					<>
						<p>
							Subtotal ( {state.basket.length} items ): <strong>{value}</strong>
						</p>
						<small className='subtotal__gift'>
							<input type='checkbox' />
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
			<button onClick={e => history.push('/payment')}>Proceed to checkout</button>
		</div>
	);
}

export default Subtotal;
