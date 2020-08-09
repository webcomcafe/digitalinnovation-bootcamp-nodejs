const frutas = ['melancia', 'banana'];
const salgados = ['coxinha', 'kibe', 'empada'];
const sum = frutas.concat(salgados);
console.log(sum);

// slice - inserre ou remove elementos
console.log('--- slice ---');
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(0, 2)); // [1,2]
console.log(arr.slice(2)); // [3, 4, 5]
console.log(arr.slice(-1)); // [5]
console.log(arr, arr.slice(-3)); // [3, 4, 5]

console.log('--- splice ---'); // não é imutável, altera o array original
console.log(arr.splice(2), arr);
console.log(arr.splice(0, 0, 'first'), arr);

console.log(sum.splice(3, 0, 'acerola'));
console.log(sum);
console.log(sum.splice(4, 1, 'pizza'));
console.log(sum);
