import {USER_LOGIN, USER_LOGOUT} from '../constants';

import products from '../mock_products';

export const userLogin = () => {
    return {
        type: USER_LOGIN,
        name: 'max',
        id: '1'
    }
};

export const userLogout = () => {
    return {
        type: USER_LOGOUT
    }
};
