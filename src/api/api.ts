import axios from 'axios';

const API = axios.create({
  baseURL: 'https://692941ad9d311cddf348bed2.mockapi.io/:endpoint'
});

export default API;
