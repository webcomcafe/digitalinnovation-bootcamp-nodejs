const { EventEmitter } = require('events');

const emmiter = new EventEmitter();

emmiter.on('User logged', data => {
    console.log(data);
});

emmiter.emit('User logged', { user: 'Airton Lopes' });

class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}

const users = new Users;
users.once('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Airton' });
users.userLogged({ user: 'Lopes' });