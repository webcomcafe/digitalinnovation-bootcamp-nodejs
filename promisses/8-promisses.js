const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const base = './promisses/';

const readFileAsync = promisify(fs.readFile);

console.log('Begin');
function read(index) {
    return readFileAsync(path.resolve(base, `s${index}.txt`), { encoding: 'utf-8' });
}

function start(index, max) {
    if (index > max) return;
    read(index).then(data => {
        console.log(data, '\n');
        start(index + 1, max);
    })
}

start(1, 5);