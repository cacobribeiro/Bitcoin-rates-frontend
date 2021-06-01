import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import configAxios from '../configs/axios/index.json';

import { setCurrencyDispatch, setSelectDispatch } from '../redux/actions/updateCurrency';

function UpdateCurrency({ setSelect, setCurrency, select, currency }) {
  async function sendCurrency() {
    const token = localStorage.getItem('tokenAcess');

    if (!token) return window.location.href('/login');

    await axios({
      ...configAxios.updateCurrency,
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data: {
        currency: select,
        value: currency,
      },
    })
      .then(() => (window.location.href = '/'))
      .catch((err) => {
        if (err.response.statusText === 'Unauthorized') return (window.location.href = '/login');
        console.log(err.response);
        alert(err.response.data.message);
      });
  }

  return (
    <div>
      <Link to="/">
        <button className="btn border m-2">{'<'}</button>
      </Link>
      <div className="card text-center">
        <div className="card-header"></div>
        <div className="card-body">
          <select onChange={(e) => setSelect(e.target.value)} className="m-3">
            <option value="BRL">BRL</option>
            <option value="CAD">CAD</option>
            <option value="EUR">EUR</option>
          </select>
          <input
            className="form-control mr-sm-2"
            onChange={(e) => setCurrency(e.target.value)}
            value={currency}
            placeholder="Currency"
          />
        </div>
        <div className="card-footer text-muted">
          <button onClick={() => sendCurrency()} type="button" className="btn btn-secondary">
            Atualizar
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  select: state.updateCurrency.select,
  currency: state.updateCurrency.currency,
});

const mapDispatchToProps = (dispatch) => ({
  setSelect: (select) => dispatch(setSelectDispatch(select)),
  setCurrency: (currency) => dispatch(setCurrencyDispatch(currency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCurrency);
