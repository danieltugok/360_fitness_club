import axios, { type AxiosInstance } from 'axios';

const http: AxiosInstance = axios.create({
    // baseURL: process.env.VUE_APP_API_URL || 'http://localhost:3000/api/v1',
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' },
});

export default http;