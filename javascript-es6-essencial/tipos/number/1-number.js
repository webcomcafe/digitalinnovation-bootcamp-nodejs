const myNumber = 12.4032;

// Transformar número para string
const numberAsString = myNumber.toString();
console.log('Número trnasformado em string:', typeof numberAsString);

// Retorna número com um número de casas decimais
const fixedTwoDecimais = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais:', fixedTwoDecimais);

// Transforma uma string em float
console.log('\nString parseada para float:', parseFloat('13.22'));

// Transforma uma strin em int
console.log('\nString parseada para int:', parseInt('13.20'));