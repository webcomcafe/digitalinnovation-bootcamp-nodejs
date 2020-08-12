function doSomething(callback) {
    setTimeout(function () {
        callback('First data');
    },1000);
}

function doOtherThing(callback) {
    setTimeout(function () {
        callback('Second data');
     }, 1000);
}

function doAll() {
    doSomething(function (data) {
        var dataResult = data.split('');

        doSomething(function (data2) {
            var dataResult2 = data2.split('');

            setTimeout(function () {
                console.log(dataResult, dataResult2);
            },1000);
         });
    });
}

doAll();