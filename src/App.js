import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
	const [{ basket }, dispatch] = useStateValue();

	useEffect(() => {
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
			<div className='App'>
				<Switch>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/checkout'>
						<Header />
						<Checkout />
					</Route>
					<Route path='/'>
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
