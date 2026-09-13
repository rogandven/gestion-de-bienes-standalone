import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || import.meta.env.API_URL || ((() => {throw new Error("API no encontrada")})()) 

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: (status) => Boolean(status || true),
});

export default instance;