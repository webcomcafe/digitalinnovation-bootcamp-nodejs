// rest operator, spread operator ...
// strings, arrays, objetos literais, objetos interáveis

const str = 'Airton Lopes';
const arr1 = [1, 2, 3, 4];

function strChars(...chars) {
    console.log(chars);
    console.log(arguments);
}

strChars(...str);

const arr2 = [5, 6, 7, 8];
//const conc = arr1.concat(arr2);
const conc = [...arr1, ...arr2];
console.log(conc);

console.log('');

const name = {
    name: 'Airton'
};

const lastName = {
    lastName: 'Lopes',
}

const cpf = new Object;
cpf.cpf = '123';

const fullName = {
    ...name,
    ...lastName,
    ...cpf,
}

console.log(fullName);

const pessoa = {
    endereco: {
        cidade: 'Goiânia',
        bairro: 'Setor Sul'
    },
}
// Shallow copy
const user = { ...pessoa, email: 'user@teste.com' }
// const user2 = {endereco: {...pessoa.endereco}, email: 'user@teste.com'}
user.endereco.bairro = 'Setor Bueno';
console.log(user, pessoa);

// Shallow copy
console.log('--- Shallow copy ---');

var employeeDetailsOriginal = {
    name: 'Manjula',
    age: 25,
    profession: 'Software Engineer',
};

var employeeDetailsDuplicate = employeeDetailsOriginal;
employeeDetailsDuplicate.name = 'NameChanged';
console.log(employeeDetailsDuplicate, employeeDetailsOriginal);

// Deep copy
console.log('--- Deep copy ---');

var employeeDetailsDuplicate = {
    name: employeeDetailsDuplicate.name,
    age: employeeDetailsOriginal.age,
    profession: employeeDetailsOriginal.profession,
}
employeeDetailsDuplicate.age = 32;
console.log(employeeDetailsOriginal, employeeDetailsDuplicate);