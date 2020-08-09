// Iterators


const arr = [1, 2, 3, 4];

// Iterator contendo apenas chaves
const arriteratoKeys = arr.keys();

console.log(arriteratoKeys.next());
console.log(arriteratoKeys.next());
console.log(arriteratoKeys.next());
console.log(arriteratoKeys.next());
console.log(arriteratoKeys.next()); // value: undefined, done: true

console.log('---');

// Iterator contendo apenas valores
const arriteratoValues = arr.values();

console.log(arriteratoValues.next());
console.log(arriteratoValues.next());
console.log(arriteratoValues.next());
console.log(arriteratoValues.next());
console.log(arriteratoValues.next()); // value: undefined, done: true

console.log('---');

// Iterator contendo par de entrada [chave, valor]
const arriteratoEntries = arr.entries();

console.log(arriteratoEntries.next());
console.log(arriteratoEntries.next());
console.log(arriteratoEntries.next());
console.log(arriteratoEntries.next());
console.log(arriteratoEntries.next()); // value: undefined, done: true