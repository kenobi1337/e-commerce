import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct({ id, image, title, price, rating }) {
	return (
		<div className='checkoutProduct'>
			<img alt='product in the cart' src={image} className='checkoutProduct__image' />
			<div className='checkoutProduct__info'>
				<p className='checkoutProduct__title'>{title}</p>
				<p className='checkoutProduct__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='checkoutProduct__rating'>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>⭐</p>
						))}
				</div>
				<button>Remove from basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;