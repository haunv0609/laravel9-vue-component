import axios from 'axios';

// let token = localStorage.getItem('token');
axios.defaults.baseURL = '/api';
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

import { apiGet, apiPost, apiPut, apiDelete } from './api';
window.apiGet = apiGet;
window.apiPost = apiPost;
window.apiPut = apiPut;
window.apiDelete = apiDelete;
