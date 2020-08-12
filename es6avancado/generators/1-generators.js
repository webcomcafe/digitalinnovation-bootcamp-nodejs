// Gengerators são funções que pausam e despausam, retorna valores

function* hello() {
    console.log('Hello');
    yield;

    console.log('From');
    const out = yield 2;

    console.log('Function', out);
}

const gen = hello();
gen.next();
gen.next();
gen.next('Outside');

console.log('');

function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const nat = naturalNumbers();
console.log(nat.next());
console.log(nat.next());
console.log(nat.next());
console.log(nat.next());

// Generator

const obj3 = {
    values:[1, 2, 3, 4, 5],
    *[Symbol.iterator]() {// meta informacao 
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
}

for (let value of obj3) {
    console.log(value);
}

