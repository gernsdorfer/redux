import {createStore} from 'redux';
import {reducers} from './reducer';

let store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());
import {Product, Basket, User} from './component';

new Basket(store),
    new Product(store),
new User(store);