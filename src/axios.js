import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:5001/e-commerce-760c8/us-central1/api' // api url of cloud function
});

export default instance;
