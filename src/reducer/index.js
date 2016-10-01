import {combineReducers} from 'redux'
import {basketStore} from './basket';
import {productStore} from './product';
import {userStore} from './user';

export const reducers = combineReducers({
    basketStore,
    productStore,
    userStore
});