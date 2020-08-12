const simpleFunc = async () => {
    d;
    return 12345;
}

simpleFunc().then(data => {
    console.log(data);
}).catch(err => {
    console.log('Erro!',err);
})