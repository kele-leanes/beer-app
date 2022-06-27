import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});
