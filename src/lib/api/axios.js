import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  config => config,
  err => Promise.reject(err.response)
);
axiosInstance.interceptors.response.use(
  res => res.data,
  err => Promise.reject(err.response)
);
const request = axiosInstance;

export { request };
