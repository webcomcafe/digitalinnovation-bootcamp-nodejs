class MyError extends Error {
    constructor({ message, data }) {
        super(message);
        this.data = data;
    }
}

try {
    const name = 'Celso Henrique';

    throw new MyError({
        message: 'My custom error',
        data: {
            type: 'Server error',
        }
    });

    console.log(name);
    
} catch (err) {
    console.log('Ops', err);
    console.log(err.data);
}