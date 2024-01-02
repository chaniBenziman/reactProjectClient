import { observable, action, computed, makeObservable, runInAction } from 'mobx';

class ServiceStore {
    servicesList = [];

    constructor() {
        makeObservable(this, {
            servicesList: observable,
            addService: action,
            getServicesList: computed,
        });

        this.fetchServices();//אתחול נתונים
    }

    addService(service) {
        fetch('http://localhost:8787/service', {
            method: 'POST',
            body: JSON.stringify(service),
            headers: {
                "Content-Type": "application/json",
              },
        }).then((res) => {
            console.log(res);
             this.servicesList.push(service);
        }).catch((error) => {
            console.log(error);
        });
    }

    fetchServices = async () => {
        try {
            console.log("fetchServices");
            const response = await fetch("http://localhost:8787/services", {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error('Failed to fetch services');
            }

            const data = await response.json();
            runInAction(() => {
                this.servicesList = data;
            });
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    }

    get getServicesList() {
        return this.servicesList;
    }
}

export default new ServiceStore();