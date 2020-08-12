// Pendding
// Fulfilled
// Rejected
const doSomething = _ => new Promise((resolve, reject) => {
    //throw new Error('Something went wrong!');
    setTimeout(function () {
        resolve('First Data');
    }, 1000);
});

const doOtherThing = _ => new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('Second Data');
    }, 1000);
});

doSomething()
    .then(data => {
        console.log(data);
        return doOtherThing();
    }) 
    .then(data2 => console.log(data2))
    .catch(err => console.log('Vixi!'))
    //.finaly(res => console.log('Ops', res));

console.log('');

// Retorna quando todas as promisses tiverem terminadas
Promise.all([doSomething(), doOtherThing()]).then(data => {
    console.log('all',data);
}).catch(err => console.log('Ops', err));

// Retorna a promisse que for resolvida primeiro
Promise.race([doSomething(), doOtherThing()]).then(data => {
    console.log('race', data);
}).catch(err => console.log('ops', err));