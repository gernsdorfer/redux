import { userLogin,userLogout } from '../actions';

let selector = 'user';
export class User {
    constructor(store) {
        this.store = store;
        this.listenOnStoreChange();
        this.render((this.store.getState().userStore));
        window.userInstanze = this;
    }

    listenOnStoreChange () {
        this.store.subscribe(() => {
            this.render((this.store.getState().userStore));
        });
    }

    login () {
        this.store.dispatch(userLogin());
    }

    logout () {
        this.store.dispatch(userLogout());
    }

    render (user) {
        document.querySelector(selector).innerHTML = (user.name || '' + ' ') + this.getUserBuuton(user);
    }

    getUserBuuton (user) {
        if(!user.id) {
            return '<button onclick="userInstanze.login();">login</button>'
        }
        return '<button onclick="userInstanze.logout();">logout</button>'
    }
}

