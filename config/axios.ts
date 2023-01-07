import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://dummyjson.com',
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },

  function (error: any) {
    // eslint-disable-next-line no-alert
    return Promise.reject(error);
  }
);
