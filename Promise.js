function MyPromise(mainFn) {

    let onResolve, onReject;

    this.then = function (fn) {
        onResolve = fn;
        return this;
    }

    this.catch = function (fn) {
        onReject = fn;
        return this;
    }

    function resolve(data) {
        if (typeof onResolve === 'function') {
            onResolve(data);
        }
    }
    function reject(error) {
        if (typeof onReject === 'function') {
            onReject(error);
        }
    }

    mainFn(resolve, reject);
}

MyPromise.resolve = function (data) {
    return new MyPromise((resolve, reject) => {
        setTimeout(function () {
            resolve(data);
        });
    });
}

MyPromise.reject = function (error) {
    return new MyPromise((resolve, reject) => {
        setTimeout(function () {
            reject(error);
        });

    });
}

MyPromise.all = function (promises) {
    let responses = [];
    return new MyPromise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then((data) => {
                responses.push(data);
                if (responses.length === promises.length) {
                    resolve(responses);
                }
            }).catch((error) => {
                reject(error);
            });

        }
    });
}

globalThis.MyPromise = MyPromise;