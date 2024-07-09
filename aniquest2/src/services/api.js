import axios from 'axios';

const API_URL = 'https://your-backend-api.com/api'; // Update with your actual API URL

export const login = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

export const register = (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const resetPassword = (email) => {
  return axios.post(`${API_URL}/reset-password`, { email });
};
