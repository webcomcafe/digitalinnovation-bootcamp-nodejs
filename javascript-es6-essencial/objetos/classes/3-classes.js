'use strict';

function Person(initialName) {
    let name = initialName;

    this.getName = function () {
        return name;
    }

    this.setName = function (newName) {
        name = newName;
    }
}

const p = new Person('Airton');
p.setName('Airton Lopes');
console.log(p.getName());