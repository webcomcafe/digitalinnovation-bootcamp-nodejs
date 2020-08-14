const promisse = new Promise((resolve, reject) => {
    setTimeout(() => resolve('End'), 2000);
});

console.log('Begin');
promisse.then(console.log);
//promisse.then(data => console.log(data));