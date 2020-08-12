
const uniqueId1 = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

// Synbols são únicos
console.log(uniqueId1 === uniqueId2); // false

const obj = {
    [uniqueId1]: 'Helo',
}

console.log(obj);

// Iterator
const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();
while (true) {
    let { value, done } = it.next();
    if (done) {
        break;
    }
    console.log(value);
}
for (item of arr) {
    console.log(item);
}
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); // value: undefined, done: true

console.log('');

const obj2 = {
    values: [1,2, 3, 4, 5],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length,
                }
            }
        }
    }
};

const itr = obj2[Symbol.iterator]();

for (num of obj2) {
    console.log(num, '-');
}

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());