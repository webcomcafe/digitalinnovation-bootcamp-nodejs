class Math {
    sum(a, b) {
        return a + b;
    }

    multi(a, b, callback) {
        setTimeout(() => {
            callback(a * b);
        }, 3000)
    }

    avg(...nums) {
        return nums.reduce((total, value) => total += value, 0) / nums.length;
    }

    printSum(req, res, a, b) {
        res.load('index', a + b);
    }
}

module.exports = Math;