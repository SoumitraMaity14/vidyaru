// src/api/axiosClient.ts
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // base API URL
  withCredentials: true,                 // send cookies automatically
  headers: {
    'Content-Type': 'application/json',
  },
});



export default axiosClient;
