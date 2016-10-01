import {fetchBasket} from '../actions';

let selector = 'basket';

export class Basket {
    constructor(store) {
        store.subscribe(() => {
            this.render((store.getState().basketStore));
        });
        store.dispatch(fetchBasket());
    }

    render(basketStore) {
        document.querySelector(selector).innerHTML = 'my Basket : ' + basketStore.length;
    }
}

