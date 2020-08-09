// array.flat  retorna um array de subarray colcoando todos em um mesmo nível previamente especificado

const idades = [10, 30, 40, [50, 60, 40], 15, 40, ['A', ['B', 'C']]];
console.log(idades.flat(2));
console.log(idades);

console.log('--- flatMap ---');
const items = [1, 2, 3, 4];
console.log(items.flatMap(value => [value * 2]));
console.log(items.flatMap(value => [[value * 2]]));