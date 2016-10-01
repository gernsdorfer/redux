import {fetchProduct, addToBasket, removeFromBasket} from '../actions';

let selector = 'product';

export class Product {
    constructor(store) {
        this.store = store;
        this.listenOnStoreChange();
        this.store.dispatch(fetchProduct());
        window.productInstanze = this;
    }

    listenOnStoreChange () {
        this.store.subscribe(() => {
            this.render(
                this.store.getState().productStore,
                this.store.getState().basketStore
            );
        });
    }

    addProductToBasket(id) {
        this.store.dispatch(addToBasket(id));
    }

    removeProductFromBasket(id) {
        this.store.dispatch(removeFromBasket(id));
    }

    render(productList, basketList) {
        document.querySelector(selector).innerHTML =
            '<b>my Products</b> <br>' +
            productList
                .map((product) => {
                    return product.name + this.getBasketButton(product, basketList);
                })
                .join('<br />');
    }

    getBasketButton(product, basketList) {
        return (this.isProductInBasket(product, basketList)
                ? '<button onclick="productInstanze.removeProductFromBasket(\'' + product.id + '\');">remove from basket</button>'
                : '<button onclick="productInstanze.addProductToBasket(\'' + product.id + '\');">add to basket</button>'
        )
    }

    isProductInBasket(product, basketList) {
        return basketList.indexOf(product.id) !== -1;
    }
}

