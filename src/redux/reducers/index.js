import { combineReducers } from 'redux';
import getBitconRate from './btcRate';
import login from './login';
import updateCurrency from './updateCurrency';

const rootReducer = combineReducers({
  getBitconRate,
  updateCurrency,
  login,
});

export default rootReducer;
