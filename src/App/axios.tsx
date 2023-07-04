import axios from 'axios';

const baseURL = process.env.REACT_APP_API_ENDPOINT;

const instance = axios.create({
    baseURL
});

export default instance;
