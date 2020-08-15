const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('End'), 5000);
});

(async function () {
    console.log('Begin');

    const text = await promise;
    console.log(text);

    // Or
    console.log(await promise);

    // Or 
    try {
        const result = await promise;
        setTimeout(() => console.log(result), 5000);
    } catch (err) {
        console.error(err);
    }
})();