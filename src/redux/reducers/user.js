import { LOGIN, REGISTER } from 'redux/types';
const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return { ...action.payload };
    case LOGIN:
      return { ...action.payload };

    default:
      return state;
  }
};

export default userReducer;
