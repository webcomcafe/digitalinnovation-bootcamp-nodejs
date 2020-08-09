// Arrow Function
// Arrow function não sofre hosting

console.log(hi('Airton'));
console.log(hi('Airton'));
console.log(t);

const hi = (str) => {
    return `Hi ${str}!`;
};

var t = 123;
const obj = {
    showContext: function () {
        this.log('Ops');
        setTimeout(() => {
            this.log('Ops!!');
        }, 1000);
    },
    log: function (value) {
        console.log(value);
    }
};

obj.showContext();