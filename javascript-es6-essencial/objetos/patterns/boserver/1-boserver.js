// Notifica

class Observable {
    constructor() {
        this.observables = [];
    }

    subscribe(fn) {
        this.observables.push(fn);
    }

    notify(data) {
        this.observables.forEach(fn => fn(data));
    }

    unsubscribe(fn) {
        this.observables = this.observables.filter(ob => ob !== fn);
    }
}


const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('First notify!');
o.unsubscribe(logData2);
o.notify('Second notify!');

