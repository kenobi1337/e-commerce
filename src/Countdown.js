import React, { useState, useEffect } from 'react';
import './Countdown.css';

function Countdown() {
	const calculateTimeLeft = () => {
		let year = new Date().getFullYear();
		let difference =
			+new Date(`02/14/${year}`) - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(
					difference / (1000 * 60 * 60 * 24)
				),
				hours: Math.floor(
					(difference / (1000 * 60 * 60)) %
						24
				),
				minutes: Math.floor(
					(difference / 1000 / 60) % 60
				),
				seconds: Math.floor(
					(difference / 1000) % 60
				)
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(
		calculateTimeLeft()
	);
	const [flash, setFlash] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => {
			clearTimeout(timer);
		};
	});

	useEffect(() => {
		const flashEvent = setTimeout(() => {
			setFlash(!flash);
		}, 1000);

		return () => {
			clearTimeout(flashEvent);
		};
	});

	const timerComponents = [];

	let time;
	let unit;
	flash ? (time = 'green') : (time = 'red');
	flash ? (unit = 'red') : (unit = 'green');

	Object.keys(timeLeft).forEach(interval => {
		if (!timeLeft[interval]) {
			return;
		}

		timerComponents.push(
			<>
				<span className={time}>
					{timeLeft[interval]}{' '}
				</span>
				<span className={unit}>
					{interval}{' '}
				</span>
			</>
		);
	});

	return (
		<div>
			{timerComponents.length ? (
				timerComponents
			) : (
				<span> </span>
			)}
		</div>
	);
}

export default Countdown;
