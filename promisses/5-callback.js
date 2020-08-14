const fs = require('fs');
const path = require('path');
const base = './promisses/';

function cb(err, data, index, max) {
    if (err) throw err;
    console.log(data, '\n');
    return start(index + 1, max);
}

function start(index, max) {
    if (index > max) return;
    fs.readFile(
        path.resolve(base, `s${index}.txt`),
        { encoding: 'utf-8' },
        (err, data) => cb(err, data, index, max)
    );
}

console.log('Begin');

start(1, 5);

console.log('End');