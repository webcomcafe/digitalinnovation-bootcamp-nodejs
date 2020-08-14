const coinFlip = new Promise((resolve, reject) => {
    return Math.random() > 0.5 ? resolve('Yay') : reject('Oops');
});

coinFlip
    .then(data => console.log(data, 'end 1'))
    .catch(err => console.log(err, 'Erro 1'))
    .then(() => console.log('end 2'))