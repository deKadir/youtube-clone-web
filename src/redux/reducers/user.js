import { LOGIN, REGISTER, SET_USERINFO, RESET_USER } from 'redux/types';
const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return { ...action.payload };
    case LOGIN:
      return { ...action.payload };
    case SET_USERINFO:
      return { ...state, ...action.payload };
    case RESET_USER:
      return {};

    default:
      return state;
  }
};

export default userReducer;
