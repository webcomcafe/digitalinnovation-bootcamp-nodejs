const values = [];
while (values.length < 6) {
    const val = Math.random() * 10;// gets();
    values.push(val);
}
const result = values.filter(val => val > 0).length;
console.log(`${result} valores positivos`);