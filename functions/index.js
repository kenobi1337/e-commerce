const functions = require('firebase-functions');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const secretTestAPI =
	'sk_test_51I7ivDBohYXHsUUFZNhr9AMhlX12fshMAF4rvShtgKn9nag8PeeBBeCJOWKqAnYZu8RManNrDzHniDmLan1jAKhP00vsGqYP86';
const secretLiveAPI =
	'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';

const stripe = require('stripe')(secretLiveAPI);

// API

// app config
const app = express();

// middleware
app.use(cors({ origin: true }));
app.use(morgan('dev'));
app.use(express.json());

// api route
app.get('/', (req, res) => {
	res.send(`server is running`);
});

app.post('/payments/create', async (req, res) => {
	const { total } = req.query;
	console.log('Payment Request received => ', total);

	const paymentIntent = await stripe.paymentIntents.create(
		{
			amount: total, // sub unit of usd
			currency: 'usd'
		}
	);

	res.status(201).send({
		clientSecret: paymentIntent.client_secret
	});
});

// listener
exports.api = functions.https.onRequest(app);

// http://localhost:5001/e-commerce-760c8/us-central1/api
