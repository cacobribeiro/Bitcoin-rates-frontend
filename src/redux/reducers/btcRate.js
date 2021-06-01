import { RATES, SET_QUANTITY } from '../actions/getBitcoinsRate';

const INITIAL_STATE = {
  rates: [],
  quantity: 1,
};

const getBitconRate = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RATES:
      return {
        ...state,
        rates: action.rates.bpi,
      };
    case SET_QUANTITY:
      return {
        ...state,
        quantity: action.quantity,
      };
    default:
      return state;
  }
};

export default getBitconRate;
