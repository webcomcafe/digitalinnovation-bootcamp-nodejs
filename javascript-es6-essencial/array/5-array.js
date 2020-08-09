// Buscar elementos

const arr = [1, 2, 3, 4];

// Retorna o valor do item encontrado
const firstGreaterThanTwo = arr.find(value => value > 2); 
console.log(firstGreaterThanTwo); // 3

const firstIndexGreaterThanTwo = arr.findIndex(value => value > 2); 
console.log(firstIndexGreaterThanTwo); // 2

// [T]odos os valores que satisfazem a codição
const allValuesGreaterThanTwo = arr.filter(value => value > 2);
console.log(allValuesGreaterThanTwo); // [3,4]

//
const arr2 = [1, 3, 3, 4, 3, 'a', 'A' ,'a'];

// Retorna índice da primeira ocorrencia do valor especificado
const firstIndexOfItem = arr2.indexOf(3);
console.log(firstIndexOfItem); // 1

// Retorna o índice da última ocorrência do valor especificado
const lastIndexOfitem = arr2.lastIndexOf(3);
console.log(lastIndexOfitem); // 4

// Retorna true caso o valor esteja incluído no array, e falso caso contrário.
const hasItemOne = arr2.includes(1);
console.log(hasItemOne); // true

const hasItemTwo = arr2.includes(2);
console.log(hasItemTwo); // false

const hasItemThree = arr2.includes('a');
console.log(hasItemThree); // false

// Retorna true se algum item satisfaz a condição, e false caso contrário
const hasSomeEvenNumber = arr2.some(value => value %2 === 0);
console.log(hasSomeEvenNumber); // true

// Retorna true se todos os items satisfazem uma condição, e falso caso contrário
const allEvenNumbers = arr2.every(value => value % 2 === 0);
console.log(allEvenNumbers);  // false

// Retorn aray ordenado de acordo com condição
const arrSort = arr2.sort( (value, next) => next - value );
console.log(arrSort);

// Retorna um array com os items na ordem investida
const revArr = arr2.reverse();
console.log(revArr);

// Transforma um array em string, juntando os items e os seprando por um separador
const arrStr = arr2.join('-');
console.log(arrStr);

// Transforma um array em outro tipi de acordo com a condição especificada
const arrReduce = arr2.filter(value => typeof value === 'number').reduce((total, value) => total += value, 0);
console.log(arrReduce);