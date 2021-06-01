import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import configAxios from '../configs/axios/index.json';
import React, { Component } from 'react';
import { setRate, setQuantity } from '../redux/actions/getBitcoinsRate';

class Home extends Component {
  getCurrencys = async () => {
    const { setRates } = this.props;
    const token = localStorage.getItem('tokenAcess');

    if (!token) return (window.location.href = './login');

    await axios({
      ...configAxios.getCurrency,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then((response) => setRates(response.data))
      .catch((err) => {
        if (err.response.statusText === 'Unauthorized') return (window.location.href = '/login');
        alert(err.response.statusText);
      });
  };

  componentDidMount() {
    this.getCurrencys();
  }

  render() {
    const { getRates, btcQuantity, setQuantity } = this.props;

    if (!getRates) return null;

    const keys = Object.keys(getRates).filter((coin) => coin !== 'BTC');

    return (
      <div className="card text-center">
        <div className="card-header"></div>
        <div className="card-body">
          <h5 className="card-title">Convert to Bitcoin</h5>
          <Link to="/atualizar">
            <button className="btn btn-secondary m-2">Atualizar valor Monetario</button>
          </Link>
          <p className="card-text">How much you?</p>
          <p className="card-text">BTC</p>
          <input
            className="form-control mr-sm-2"
            onChange={(e) => setQuantity(e.target.value)}
            type="search"
            placeholder="Quantity"
            value={btcQuantity}
          />

          {keys.map((coin) => {
            let value = (getRates[coin].rate_float * btcQuantity).toLocaleString();

            return (
              <div key={coin} className="p-3 m-1">
                <label>
                  {coin}
                  <input disabled className="btn btn-secondary m-2" value={value}></input>
                </label>
              </div>
            );
          })}
        </div>
        <div className="card-footer text-muted">{Date().toLocaleString('pt-BR')}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getRates: state.getBitconRate.rates,
  btcQuantity: state.getBitconRate.quantity,
});

const mapDispatchToProps = (dispatch) => ({
  setRates: (rates) => dispatch(setRate(rates)),
  setQuantity: (rates) => dispatch(setQuantity(rates)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
