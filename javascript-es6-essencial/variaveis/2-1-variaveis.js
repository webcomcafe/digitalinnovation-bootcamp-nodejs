var test = 'example global';

(() => {
    console.log(`Valor dentro da função "${test}"`);
    if (true) {
        var test = 'example local';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();