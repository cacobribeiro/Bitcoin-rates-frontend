export const CHANGE_USERNAME = 'CHANGE_USERNAME';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

const changeUsername = (username) => ({
  type: CHANGE_USERNAME,
  username,
});

const changePassword = (password) => ({
  type: CHANGE_PASSWORD,
  password,
});

export { changeUsername, changePassword };
