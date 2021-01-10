import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://us-central1-e-commerce-760c8.cloudfunctions.net/api' //'http://localhost:5001/e-commerce-760c8/us-central1/api' // api url of cloud function
});

export default instance;
