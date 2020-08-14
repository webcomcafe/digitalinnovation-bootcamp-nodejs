const fs = require('fs');
const path = require('path');
const base = './promisses/';

console.log('Begin');

fs.readFile(path.resolve(base, 'exilio.txt'), { encoding: 'utf-8' }, (err, data) => { 
    if (err) throw err;
    console.log(data);
});

console.log('End');