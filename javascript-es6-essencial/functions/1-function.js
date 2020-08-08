function fn() {
    this.name = 'pop';
    return 'Code here';
}

const arrowFn = () => 'Code here';
const arrowFn2 = () => {
    // Mais de uma expressão
    return 'Code here';
}

// Funções também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop, fn['prop'], Object.keys(fn));

// Receber parâmetros
const logValues = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Receber e retornar funções
const controlFnExec = fnParam => allowed => {
    if (allowed) {
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); // Executará a função fn
handleFnExecution();     // Não executará a função fn

// controlFnExec como função
function controlFnExec(fnParam) {
    return function () {
        if (allowed) {
            fnParam();
        }
    }
}