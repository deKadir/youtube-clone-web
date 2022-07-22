import { LOGIN, REGISTER } from 'redux/types';

export const register = (payload) => {
  return {
    type: REGISTER,
    payload,
  };
};
export const login = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};
