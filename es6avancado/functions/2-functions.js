// Default functios arguments

const rand = _ => {
    console.log('...');
    return Math.round(Math.random() * 10);
}


// lazy evaluation - função rand só será sempre que o parâmetro não for passado ou estiver com undefined

function multi(a, b = a, c = rand()) {
    //b = typeof b === 'undefined' ? 1 : b;
    return (a * b) + c;
}

console.log(multi(5,1,2));
console.log(multi(5,1,3));
console.log(multi(5,1));
console.log(multi(5,1, undefined));

