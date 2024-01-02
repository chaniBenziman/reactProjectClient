import axios from 'axios';
import { observable, action, makeObservable, runInAction } from 'mobx';

class BusinessDatatStore {
    business = {
        name: "Coding Academy",
        address: "Rothschild 60 Tel Aviv",
        phone: "03-1234567",
        owner: "Yariv Katz",
        logo: "https://onlinegraphic.co.il/wp-content/uploads/2022/03/DDD.png",
        description: "The best coding academy in the world",
    };
    baseUrl = 'http://localhost:8787/businessData';
    constructor() {
        makeObservable(this, {
            business: observable,
            sendDataToServer: action,
            getDataBusiness:  action ,
            sendDataFirst:  action 
        });
        
        this.getDataBusiness();
    }

    getDataBusiness = () => {
        axios.get(this.baseUrl).then((result) => {
            runInAction(() => {
                console.log(result.data);
                if (!result.data.name)
                    this.sendDataFirst();
                else
                    this.business = result.data;
            });
        });
    };
    

    sendDataToServer() {
        fetch(this.baseUrl, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.business)
        }).then((result) => {
            console.log(result);
        }).catch(() => {
            console.error(res.status);
        });
    }
    sendDataFirst() {
        fetch(this.baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.business)
        }).then((result) => {
            console.log(result);
        }).catch(() => {
            console.error(res.status);
        });
    }
}
export default new BusinessDatatStore();
