const coinFlip = new Promise((res, rej) => Math.random() > 0.5 ? res(true) : rej(false));


(async function () {
    try {
        const result = await coinFlip.catch(err => err);
        console.log(result);
    } catch (err) {
        console.error(err);
    }
})();