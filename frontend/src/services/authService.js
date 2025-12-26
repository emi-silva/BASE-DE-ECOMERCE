import apiClient from './api';

export const authService = {
  register: (name, email, password) => {
    return apiClient.post('/auth/register', { name, email, password });
  },

  login: (email, password) => {
    return apiClient.post('/auth/login', { email, password });
  },

  getProfile: () => {
    return apiClient.get('/auth/profile');
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
};
