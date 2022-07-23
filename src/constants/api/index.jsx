import axios from 'axios';

export const BASE_URL = 'http://localhost:8080/api/v1';

const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use((req) => {
  let token;
  const user = localStorage.getItem('youtube_clone');
  if (user) {
    token = JSON.parse(localStorage.getItem('youtube_clone'))?.user?.token;
  }

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

const requests = {
  auth: {
    register: (body) => API.post('/auth/register', body),
    login: (body) => API.post('/auth/login', body),
    forgotPassword: (body) => API.post('/auth/forgotPassword', body),
    reset: (params, body) => API.post('/auth/reset', body, { params }),
  },
  channel: {
    get: (id) => API.get('/channel', { query: id }),
    getProfile: () => API.get('/channel/profile'),
    subscriptions: (params) => API.get('/channel/subscriptions', params),
    subscribe: (query) => API.post('/channel/subscribe', { query }),
    update: (body) => API.patch('/channel/update', { body }),
  },
  video: {
    recommend: (params) => API.get('/video/recommend', { params }),
  },
};
export default requests;
