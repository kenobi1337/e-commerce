import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import SwiftSlider from 'react-swift-slider';

function Product({
	id,
	title,
	image,
	image2,
	image3,
	image4,
	image5,
	image6,
	image7,
	image8,
	price,
	rating,
	sub,
	wholeSale,
	salePrice,
	hide,
	show
}) {
	const data = [
		{
			id: '1',
			src: image
		},
		{
			id: '2',
			src: image2
		},
		{
			id: '3',
			src: image3
		},
		{
			id: '4',
			src: image4
		},
		{
			id: '5',
			src: image5
		},
		{
			id: '6',
			src: image6
		},
		{
			id: '7',
			src: image8
		}
	];
	const [{ basket }, dispatch] = useStateValue();

	const addToBasket = () => {
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
				salePrice: salePrice
			}
		});
	};

	return (
		<div
			className={`product ${
				hide ? 'hidden' : ''
			} ${show ? 'show' : ''}`}>
			<div className="product__info">
				<h3>
					{title}{' '}
					<span
						style={{
							color: 'red',
							fontSize: 16
						}}>
						(Free shipping)
					</span>
					<span
						style={{
							fontSize: 16
						}}>
						{sub}
					</span>
				</h3>
				<h4
					style={{
						color: 'black',
						backgroundColor: '#fec14b',
						textAlign: 'center'
					}}>
					{wholeSale}
				</h4>
				<p>
					<strong>ECO handmade</strong>{' '}
					cotton face mask, 2 layer, japanese
					style, outer made from 100% cotton,
					inside made from{' '}
					<strong>3M</strong> fabric, good
					filter safe washer
				</p>
				<p className="product__price">
					<small>$</small>
					<strong
						style={{
							color: 'red',
							textDecoration:
								'line-through'
						}}>
						{price}
					</strong>{' '}
					<small>$</small>
					<strong style={{ color: 'green' }}>
						{salePrice}
					</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>⭐</p>
						))}
				</div>
			</div>
			<SwiftSlider data={data} height={325} />
			<button
				className="button"
				onClick={addToBasket}>
				Add to basket
			</button>
		</div>
	);
}

export default Product;
