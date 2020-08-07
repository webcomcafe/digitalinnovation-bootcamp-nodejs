const name = 'Guilherme';

// Não podemos alterar o valor
// name = 'Guilherme'; // Erro

const user = {
    name: 'Guilherme',
};

// mas se for um tipo objeto, podemos trocar suas propriedades
user.name = 'Outro nome';

// Não podemos fazer o objeto "apontar" para outro objeto
// user = {
//     name: 'Guilherme',
// };

const persons = ['Guilherme', 'Pedro', 'Junnifer'];

// Podemos adicionar novos items
persons.push('João');

// Podemos remover algum item
persons.shift();

// Podemos alterar diretamente
persons[1] = 'James';

console.log(`\nArray após as alterações`, persons);
