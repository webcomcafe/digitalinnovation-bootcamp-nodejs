const fs = require('fs');
const path = require('path');
const base = './promisses/';



const files = fs.readdirSync(path.resolve(base));
const estrofes = files.filter((file) => /s[1-5].txt/gi.test(file));
console.log('Begin');
console.time('Exilio');
for (const estrofe of estrofes) {
    const text = fs.readFileSync(path.resolve(base, estrofe)).toString();
    console.log(text, '\n');
}
console.timeEnd('Exilio');
console.log('End');