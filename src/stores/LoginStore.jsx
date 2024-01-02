import { observable, makeObservable, action } from 'mobx';

class LoginStore {
    isAdmin = false;

    constructor() {
        makeObservable(this, {
            isAdmin: observable,
            setIsAdmin: action,
        })
    }

    setIsAdmin = (val) => {
        this.isAdmin = val;
    }

}

export default new LoginStore();//יצירת מופע יחיד שאליו תמיד נפנה
