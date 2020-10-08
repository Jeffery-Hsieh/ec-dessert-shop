import { FETCH_PRODUCTS } from './actionTypes';

import products from '../../examples/products.json';

const compare = {
  lowestprice: (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },
  highestprice: (a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  }
};

export const fetchProducts = () => dispatch => {
  return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });
};
