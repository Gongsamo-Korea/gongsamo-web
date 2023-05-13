import axios, { type CreateAxiosDefaults } from 'axios';
import qs from 'qs';

export const createClient = (config?: CreateAxiosDefaults) => {
  const axiosInstance = axios.create({
    ...config,
    timeout: 30000,
    paramsSerializer: (params) => qs.stringify(params),
  });
  return axiosInstance;
};

export const httpClient = createClient();
