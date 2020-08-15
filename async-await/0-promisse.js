const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('End'), 5000);
});

console.log('Begin');
promise.then(text => console.log(text));
// OR
promise.then(console.log);
// OR
promise.then(
    (res) => setTimeout(() => res('End'), 5000),
    (rej) => console.error(rej)
);