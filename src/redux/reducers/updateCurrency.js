import { SET_SELECT, SET_CURRENCY } from '../actions/updateCurrency';

const INITIAL_STATE = {
  select: 'BRL',
  currency: '',
};

const updateCurrency = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SELECT:
      return {
        ...state,
        select: action.select,
      };
    case SET_CURRENCY:
      return {
        ...state,
        currency: action.currency,
      };
    default:
      return state;
  }
};

export default updateCurrency;
