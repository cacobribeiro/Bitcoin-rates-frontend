export const RATES = 'RATES';
export const SET_QUANTITY = 'SET_QUANTITY';

export const setRate = (rates) => ({
  type: RATES,
  rates,
});

export const setQuantity = (quantity) => ({
  type: SET_QUANTITY,
  quantity,
});

export default setRate;
