import './App.css';
import Header from './Header';
import Home from './Home';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
import { db } from './firebase';


// api key
const testAPIKey =
	'pk_test_51I7ivDBohYXHsUUFpvViM3d3s7OvaExRXCl2luPbMmhBdMwDHFOSukZrzH3TK8gBfs49lIyLoUwtU8FIfy3brJnt00m71YEN3K';
const liveAPIKey =
	'pk_live_51I7ivDBohYXHsUUFqdwvmu3uB5CFh164IAm2KHTHmS4a0MrbZL5m6kP6Cr2eVps13pCHSlYJbJnA1a0WNurrMAhh008DYd15I4';

const promise = loadStripe(liveAPIKey);

function App() {
	const [{ basket }, dispatch] = useStateValue();

	useEffect(async () => {
		// run one time

		auth.onAuthStateChanged(authUser => {
			console.log(`The use is ${authUser}`);

			if (authUser) {
				// user loged in
				dispatch({
					type: 'SET_USER',
					user: authUser
				});
			} else {
				// user loged out
				dispatch({
					type: 'SET_USER',
					user: null
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/orders">
						<Header />
						<Orders />
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
