import axios from 'axios';

window.axios = axios;

axios.defaults.baseURL = '/api';

import { apiGet, apiPost, apiPut, apiDelete } from './api';
window.apiGet = apiGet;
window.apiPost = apiPost;
window.apiPut = apiPut;
window.apiDelete = apiDelete;
