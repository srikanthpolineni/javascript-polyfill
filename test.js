require('./MyPromise');
require('./Array');


// const p1 = new MyPromise((resolve, reject) => {
//     setTimeout(function () {
//         resolve("Hello World!");
//     });
// });

// const p2 = MyPromise.resolve("Hello Kitty");

// const p3 = MyPromise.reject("Error")

// const p = MyPromise.all([p2, p1]);

// p.then(function (data) {
//     console.log("Success: " + data);
// }).catch(function (error) {
//     console.error("Error: " + error)
// });

// function running(total) {

//     const summation = function () {
//         let sum = total;
//         for (let arg of arguments) {
//             sum += arg;
//         }
//         return running(sum);
//     }
//     summation.valueOf = function () {
//         return total;
//     }
//     return summation;
// }

// const add = running(0);
// var add1 = add(10, 20);
// var add2 = add1(40, 50);
// console.log(+add2);

// const arr = [0, 1, 2, [3, [[4]]]];
// console.log(arr.myFlat(2));

// const arr1 = [1, 2, 3, 4, 6, 7, 8, 9, 10];
// console.log(arr1.myFlatMap(x => [x, x * 2]));

const array1 = [[0, 1], [2, 3], [4, 5]].myReduceRight(
    (accumulator, currentValue) => accumulator.concat(currentValue)
);

console.log(array1);
// function* gen(x) {
//     yield x + 1;
//     yield x + 2;
//     yield x + 3;
//     yield x + 4;
//     yield x + 5;
// }

// const x = gen(10);
// console.log(x.next(9));
// console.log(x.next(9));
// console.log(x.next(9));

