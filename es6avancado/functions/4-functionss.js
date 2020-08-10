// Destruct

const arr = ['Maçã', 'Banana', 'Laranja', ['Tomate','Cebola','Úva']];
// Destructing
const [maca, banana, laranja, [tomate, cebola, uva='U']] = arr;
console.log(tomate, maca, cebola, uva);

console.log('');

const pessoa = {
    name: 'Airton',
    lastName: 'Lopes',
    address: {
        code: '123456',
        steat: 'Sul',
    },
    fullName: 'Airton Lopes',
}

const { name, lastName, address: {code:cep = '0220110'}, fullName:full = 'ALA', email } = pessoa;
console.log(name, lastName, cep, full, email);

console.log('');

function sum([a, b, c, d = 5]) {
    const total = a + b + c + d;
    const media = total / 4;
    console.log(media);
}

sum([7,7,7]);