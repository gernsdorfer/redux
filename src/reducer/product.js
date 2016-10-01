import {FETCH_PRODUCTS} from '../constants';

export const productStore = (state = [], action = {products: []}) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return action.products;
        default:
            return state
    }
};