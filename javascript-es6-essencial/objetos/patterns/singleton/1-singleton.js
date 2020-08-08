// Sempre retorna uma mesma instância de um objeto
// Não faz uso de new

function Pessoa() {
    if (!Pessoa.instance) {
        Pessoa.instance = this;
    }
    return Pessoa.instance;
}

const p = Pessoa.call({ name: 'Airton' });
const p2 = Pessoa.call({ name: 'Custom name' });

console.log(p);
console.log(p2);
