import {FETCH_PRODUCTS} from '../constants';

import products from '../mock_products';
let productsList = products.productsList;

export const fetchProduct = () => {
    return {
        type: FETCH_PRODUCTS,
        products: productsList
    }
};
