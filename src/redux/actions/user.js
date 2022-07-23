import { LOGIN, REGISTER, RESET_USER, SET_USERINFO } from 'redux/types';

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
export const setUserInfo = (payload) => {
  return {
    type: SET_USERINFO,
    payload,
  };
};

export const resetUser = () => {
  return {
    type: RESET_USER,
  };
};
