import axios from 'axios';
import qs from 'qs';

const ACTION_TIMEOUT = 30 * 1000;

const api = axios.create({
  baseURL: '/',
  timeout: ACTION_TIMEOUT,
  paramsSerializer: (params) =>
    qs.stringify(params, { arrayFormat: 'repeat', allowDots: true }),
});

export default api;
