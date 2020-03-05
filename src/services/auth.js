import { api } from './api';

const TOKEN_KEY = 'AUTH_TOKEN';
const USER_DATA_KEY = 'AUTH_USER';
export const isAuthenticated = async () => {
  const token = getToken();
  const { data } = await api.get('/validateToken', token);
  if (data.isValidToken) {
    return true;
  } else {
    logout();
    return false;
  }
};
export const getUserData = () => localStorage.getItem(USER_DATA_KEY);
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = (token, userData) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_DATA_KEY, userData);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
