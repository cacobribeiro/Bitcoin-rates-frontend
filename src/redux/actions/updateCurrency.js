export const SET_SELECT = 'SET_SELECT';
export const SET_CURRENCY = 'SET_CURRENCY';

export const setSelectDispatch = (select) => ({
  type: SET_SELECT,
  select,
});

export const setCurrencyDispatch = (currency) => ({
  type: SET_CURRENCY,
  currency,
});
