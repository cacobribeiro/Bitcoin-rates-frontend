const { CHANGE_USERNAME, CHANGE_PASSWORD } = require('../actions/login');

const INITIAL_STATE = {
  username: '',
  password: '',
};

export const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_USERNAME:
      return {
        ...state,
        username: action.username,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    default:
      return state;
  }
};

export default loginReducer;
