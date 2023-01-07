import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com',
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
