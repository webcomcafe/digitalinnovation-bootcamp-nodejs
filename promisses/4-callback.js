const fs = require('fs');
const path = require('path');
const base = './promisses/';

const files = fs.readdirSync(path.resolve(base));
const estrofes = files.filter(file => /s[1-5].txt/gi.test(file));

function cb (err, data) {
    if (err) throw err;
    console.log(data, '\n');
}

// for (estrofe of estrofes) {
//     fs.readFile(path.resolve(base, estrofe), {encoding: 'utf-8'}, cb);
// }
console.time('CB');
fs.readFile(path.resolve(base, 's1.txt'), { encoding: 'utf-8' }, (err, data) => {
    cb(err, data);
    fs.readFile(path.resolve(base, 's2.txt'), { encoding: 'utf-8' }, (err, data) => {
        cb(err, data);
        fs.readFile(path.resolve(base, 's3.txt'), { encoding: 'utf-8' }, (err, data) => {
            cb(err, data);
            fs.readFile(path.resolve(base, 's4.txt'), { encoding: 'utf-8' }, (err, data) => {
                cb(err, data);
                fs.readFile(path.resolve(base, 's5.txt'), { encoding: 'utf-8' }, (err, data) => {
                    cb(err, data);
                });
            });
        });
    })
});
console.timeEnd('CB');

// async function prm() {
//     const [s1, s2, s3, s4, s5] = await Promise.all(estrofes.map(txt => fs.readFile(path.resolve(base, txt))));
//     console.log(s1, '\n');
//     console.log(s2, '\n');
//     console.log(s3, '\n');
//     console.log(s4, '\n');
//     console.log(s5, '\n');
// }
// prm();
