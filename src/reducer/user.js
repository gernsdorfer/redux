import {USER_LOGIN, USER_LOGOUT} from '../constants';

export const userStore = (state = {id : null,name: ''}, action = {id: null,name : ''}) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                id: action.id,
                name: action.name
            };
        case USER_LOGOUT:
            return {
                id: null,
                name: ''
            };
        default:
            return state
    }
};