import { observable, action, computed, makeObservable, runInAction } from 'mobx';

class MeetingStore {
    isAdd = false;
    MeetingList = [];

    constructor() {
        makeObservable(this, {
            isAdd:observable,
            MeetingList: observable,
            addMeeting: action,
            getMeetingList: computed,
            setIsAdd:action,
        });

        this.fetchMeeting();
    }
    setIsAdd = (val) => {
        this.isAdd = val;
    }

    addMeeting= async(appointment) =>{
        console.log("appointment", appointment)
        console.log("JSON.stringify(appointment)", JSON.stringify(appointment))
       await fetch('http://localhost:8787/appointment', {
            method: 'POST',
            body: JSON.stringify(appointment),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (res.status === 200) {
                console.log(res.status)
                this.MeetingList.push(appointment);
                runInAction(()=> this.setIsAdd(true))
            }
            else {
                console.log(res.status)
                runInAction( ()=> this.setIsAdd(false))
            }
        }).catch((error) => {
            console.log("error", error);
            runInAction( ()=> this.setIsAdd( false))
           
        });
    }

    fetchMeeting = async () => {
        try {
            console.log("fetchMeeting");
            const response = await fetch("http://localhost:8787/appointments", {
                method: "GET",
            });
            if (!response.ok) {
                throw new Error('Failed to fetch Meeting');
            }
            const data = await response.json();
            runInAction(() => {
                this.MeetingList = data;
            });
        } catch (error) {
            console.error('Error fetching Meeting:', error);
        }
    }

    get getMeetingList() {
        return this.MeetingList;
    }
}

export default new MeetingStore();