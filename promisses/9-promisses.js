const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const base = './promisses/';

const readFileAsync = promisify(fs.readFile);

function read(index) {
    return readFileAsync(path.resolve(base, `s${index}.txt`), { encoding: 'utf-8' });
}
console.log('Begin');
const arr = [];
for (let i = 1; i <= 5; i++) arr[i - 1] = read(i);

Promise.all(arr).then(data => console.log(data.join('\n\n')));