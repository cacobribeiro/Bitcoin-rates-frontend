import React from 'react';
import { connect } from 'react-redux';
import configAxios from '../configs/axios/index.json';
import axios from 'axios';
import { changePassword, changeUsername } from '../redux/actions/login';

function FormsLogin({ setPassword, setUsername, username, password }) {
  const processToLogin = async () => {
    const tokenAcess = await axios({ ...configAxios.login, data: { email: username, password } })
      .then((response) => (localStorage.tokenAcess = response.data.token))
      .then((response) => response)
      .catch((err) => {
        err.response.data.message ? alert(err.response.data.message) : console.log(err.response)
      });

      if(localStorage.tokenAcess && tokenAcess) return window.location.href = '/'
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          onChange={(e) => setUsername(e.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted">
          email@mail.com
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted">
          135982
        </small>
      </div>
        <button type="button" className="btn btn-primary" onClick={() => processToLogin()}>
          Entrar
        </button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  username: state.login.username,
  password: state.login.password,
});

const mapDispatchToProps = (dispatch) => ({
  setUsername: (username) => dispatch(changeUsername(username)),
  setPassword: (password) => dispatch(changePassword(password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormsLogin);
