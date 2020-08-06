function getName() {
    return 'Airton Lopes';
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);