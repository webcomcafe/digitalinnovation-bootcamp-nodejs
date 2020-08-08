'use strict';

// Modificadores de acesso.getthers and setters

function Person(initialName) {
    var name = initialName;

    Object.defineProperty(this, 'name', {
        get: function () {
            return name;
        },
        set: function (value) {
            name = value.toUpperCase();
        }
    });
}

// class Person {
//     #name = '';

//     constructor(name) {
//         this.#name = name;
//     }

//     get name() {
//         return this.#name;
//     }

//     set name(value) {
//         this.#name = name;
//     }
// }

const p = new Person('Airton');
p.name = 'Airton Lopes';
console.log(p.name);




