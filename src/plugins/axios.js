import axios from 'axios';
// import LocalStorage from '@/plugins/local-storage';

export default function () {
  axios.defaults.baseURL = 'http://localhost:3000/';
  axios.defaults.headers.common.Accept = 'application/json';
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  // axios.defaults.headers.Authorization = LocalStorage.getItem('currentUser')?.accessToken || '';
  axios.interceptors.request.use((config) => config, (error) => Promise.reject(error));
}
