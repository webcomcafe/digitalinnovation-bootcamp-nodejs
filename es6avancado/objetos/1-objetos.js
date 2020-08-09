const prop1 = 'Digital Innovation One';

function hi() {
    console.log('Hi!!');
}

const hello = _ => 'Hello!!';
const lang = 'language';

var obj = {
    prop1,
    hi,
    hello,
    welcome() {
        console.log('Wellcome!!');
    },
    [lang]: 'Português'
}

console.log(obj);
obj.hi();
console.log(obj.hello());
obj.welcome();
console.log(obj.language);