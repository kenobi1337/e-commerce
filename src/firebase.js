// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
import 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBEHLTu5-r3ZbGgK3N_xuOtZ2I_cCA132E',
	authDomain: 'e-commerce-760c8.firebaseapp.com',
	databaseURL: 'https://e-commerce-760c8-default-rtdb.firebaseio.com',
	projectId: 'e-commerce-760c8',
	storageBucket: 'e-commerce-760c8.appspot.com',
	messagingSenderId: '829039309948',
	appId: '1:829039309948:web:5409f4294bb204e73705f9',
	measurementId: 'G-TPTVJMQF3X'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
