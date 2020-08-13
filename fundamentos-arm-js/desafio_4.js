
const notas = [100, 50, 20, 10, 5, 2, 1];
const input = 576; // gets();
var rest = input, num = 0;

const div = (valor, nota) => {
    var num = Math.floor(valor / nota);
    var mod = valor % nota;
    return [num, mod];
}

console.log(`${input}`);
notas.forEach(nota => {
    [num, rest] = div(rest, nota);
    console.log(`${num} nota(s) de R$ ${nota},00`);
});