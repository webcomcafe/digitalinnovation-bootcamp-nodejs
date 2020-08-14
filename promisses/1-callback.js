const fs = require('fs');
const path = require('path');
const base = './promisses/';

console.log('Begin');

const content = fs.readFileSync(path.resolve(base, 'exilio.txt'));
console.log(content.toString());

console.log('End');