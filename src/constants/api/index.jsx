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
    get: (id) => API.get('/channel', { params: { id } }),
    getProfile: () => API.get('/channel/profile'),
    subscriptions: (params) => API.get('/channel/subscriptions', { params }),
    subscribe: (params) => API.post('/channel/subscribe', {}, { params }),
    update: (body) => API.patch('/channel/update', body),
  },
  video: {
    recommend: (params) => API.get('/video/recommend', { params }),
    get: (id) => API.get('/video', { params: { id } }),
    comments: (params) => API.get('/video/comments', { params }),
    list: (params) => API.get('/video/listBy', { params }),
    myVideos: (params) => API.get('/video/myVideos', { params }),
    edit: (videoId, data) =>
      API.patch('/video/edit', data, { params: { videoId } }),
    delete: (videoId) => API.delete('/video/delete', { params: { videoId } }),
  },
  comment: {
    replies: (params) => API.get('/comment/replies', { params }),
    add: (body) => API.post('/comment/add', body),
  },
  reply: {
    add: (body) => API.post('/reply/add', body),
  },
  action: {
    add: (params) => API.post('/action', {}, { params }),
  },
};
export default requests;
