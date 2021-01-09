import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signIn = e => {
		e.preventDefault();

		// authentication
		auth.signInWithEmailAndPassword(email, password)
			.then(auth => {
				history.push('/');
			})
			.catch(err => alert(err.message));
	};

	const register = e => {
		e.preventDefault();
		auth.createUserWithEmailAndPassword(email, password)
			.then(auth => {
				if (auth) {
					history.push('/');
				}
			})
			.catch(err => alert(err.message));
		// register
	};

	return (
		<div className='login'>
			<Link to='/'>
				<img
					className='login__logo'
					alt='amazon logo'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
				/>
			</Link>

			<div className='login__container'>
				<h1>Sign in</h1>
				<form>
					<h5>E-mail</h5>
					<input type='email' value={email} onChange={e => setEmail(e.target.value)} />
					<h5>Password</h5>
					<input type='password' value={password} onChange={e => setPassword(e.target.value)} />
					<button type='submit' className='login__signInButton' onClick={signIn}>
						Sign In
					</button>
				</form>
				<p>
					By signing-in youa gree to our condition of use and Sale. Please see out Privacy notice, our cookies
					Notice and our interest based Ads
				</p>

				<button className='login__registerButton' onClick={register}>
					Create your account
				</button>
			</div>
		</div>
	);
}

export default Login;
