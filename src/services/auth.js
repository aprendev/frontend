import { api } from './api';

export const TOKEN_KEY = 'AUTH_TOKEN';
export const isAuthenticated = async () => {
  const token = getToken();
  const { data } = await api.get('/validateToken', token);
  console.log(data.isValidToken);
  if (data.isValidToken) {
    return true;
  } else {
    logout();
    return false;
  }
};
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
