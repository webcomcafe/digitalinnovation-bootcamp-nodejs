// Rtorna novo objeto sem uso de "new"

function Pessoa(customProps) {
    return {
        name: 'Airton',
        lastName: 'Lopes',
        ...customProps,
    };
}

const p = Pessoa({ name: 'Custom name', age: 32 });
console.log(p);