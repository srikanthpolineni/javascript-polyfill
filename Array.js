Array.prototype.myFlat = function (depth = 1) {
    let result = [];
    this.forEach((item) => {
        if (Array.isArray(item) && depth > 0) {
            result = result.concat(item.myFlat(depth - 1));
        } else {
            result.push(item);
        }
    });
    return result;

};

Array.prototype.myFlatMap = function (fn) {
    let result = this.map(fn);
    return result.myFlat(1);
}

Array.prototype.myReduce = function (fn, initialValue) {
    if (initialValue === undefined) {
        initialValue = this[0];
    }
    let result = initialValue
    for (let index = 1; index < this.length; index++) {
        result = fn(this[index], result)
    }
    return result;
}

Array.prototype.myReduceRight = function (fn, initialValue) {
    if (initialValue === undefined) {
        initialValue = this[this.length - 1];
    }
    let result = initialValue
    for (let index = this.length - 2; index >= 0; index--) {
        result = fn(result, this[index])
    }
    return result;
}