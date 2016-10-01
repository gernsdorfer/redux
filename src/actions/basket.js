import {REMOVE_FROM_BASKET, ADD_TO_BASKET, FETCH_BASKET} from '../constants';
import products from '../mock_products';

let productsList = products.productsList;

export const fetchBasket = () => {
    return {
        type: FETCH_BASKET,
        products: [productsList[1].id]
    }
};

export const addToBasket = (productId) => {
    return {
        type: ADD_TO_BASKET,
        productId: productId
    }
};

export const removeFromBasket = (productId) => {
    return {
        type: REMOVE_FROM_BASKET,
        productId: productId
    }
};
