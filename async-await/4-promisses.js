const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const base = './promisses/';

const readFileSync = promisify(fs.readFile);

(async function () { 
    console.log('Begin');

    try {
        const s1 = await readFileSync(path.resolve(base, 's1.txt'), { encoding: 'utf-8' });
        const s2 = await readFileSync(path.resolve(base, 's2.txt'), { encoding: 'utf-8' });
        const s3 = await readFileSync(path.resolve(base, 's3.txt'), { encoding: 'utf-8' });
        const s4 = await readFileSync(path.resolve(base, 's4.txt'), { encoding: 'utf-8' });
        const s5 = await readFileSync(path.resolve(base, 's5.txt'), { encoding: 'utf-8' });
        console.log(s1, '\n');
        console.log(s2, '\n');
        console.log(s3, '\n');
        console.log(s4, '\n');
        console.log(s5);
    } catch (err) {
        console.error(err);
    } finally {
        console.log('End');
    }

})();