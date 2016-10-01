import {ADD_TO_BASKET, REMOVE_FROM_BASKET, FETCH_BASKET} from '../constants';

export const basketStore = (state = [], action) => {
    switch (action.type) {
        case FETCH_BASKET:
            return action.products;

        case ADD_TO_BASKET:
            if (state.indexOf(action.productId) !== -1) {
                return state;
            }
            return [
                ...state,
                action.productId
            ];
        case REMOVE_FROM_BASKET:
            return state.filter((product)=> action.productId !== product);
        default :
            return state;
    }
};