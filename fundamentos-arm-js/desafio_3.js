const values = [];
while (values.length < 5) {
    const val = Math.random() * 10;   // gets();
    values.push(val);
}
const pares     = values.filter(val => val % 2 === 0 ).length;
const impares   = values.filter(val => val % 2 !== 0 ).length;
const positivos = values.filter(val => val > 0 ).length;
const negativos = values.filter(val => val < 0 ).length;
console.log(`${pares} valor(es) par(es)`);
console.log(`${impares} valor(es) impar(es)`);
console.log(`${positivos} valor(es) positivo(s)`);
console.log(`${negativos} valor(es) negativo(s)`);