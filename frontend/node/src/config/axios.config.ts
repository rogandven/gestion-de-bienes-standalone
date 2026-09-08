import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL ? import.meta.env.VITE_BASE_URL : (() => {throw Error("API mala XD")})();

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: (status) => Boolean(status || true),
});

export default instance;