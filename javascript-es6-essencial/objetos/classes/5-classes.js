'use strict';

// Static

function PersonFn() {

}

PersonFn.walk = function () {
    console.log('walking...');
}

PersonFn.walk();

console.log('---');

class Person {
    static walk() {
        console.log('walking...');
    }
}

Person.walk();