'use strict'
//              ---- Область виидимости переменных 

// console.log(a);
// console.log(a);

// {
//     var a = 19;
//     let b = 10;

// }
// console.log(a)
// // console.log(b);

// a = 20;
// console.log(a);

// let a = [2,3,4,5,6].map(i => i * 2);
// console.log(a);

//              ---- Типы данных

// console.log(typeof !NaN)
// let a = !!'NaN';
// console.log(a);
// console.log(typeof a);

// let a = null;
// console.log(typeof a);
// console.log(a);

// let a = {
//     name: 'Alice',
//     age: 13,
// }

// console.log(a['name']);

// let arr = [1,2,4,5,6,7];
// let arr2 = arr.filter(i => i < 5);

// console.log(arr2);
// console.log(arr == arr2);

// arr = 'asdsad';

// console.log(arr);
// console.log(arr2);

// const a = 12;
// console.log(a);

// const a = {
//     a: 12,
//     b: 123,
//     c: confirm('Are u here?'),
// }
// const ageKey = prompt();

// a[ageKey] = 22;
// // a['name'] = 'Kate';

// console.log(a)
// console.log(a.c);

//              ---- Взаимодействие с пользователем 

// function getUserAge () {
//     let userText = +prompt('How old are u?');

//     if(isNaN(userText) == true || userText == '') {
//         alert('Try again!');
//         getUserAge();
//     }

//     return userText
// }

// let userRes = getUserAge();
// console.log(userRes);

// const arrAnswers = [1,2,3,4,5];

// arrAnswers[0] = prompt('asasd','');
// arrAnswers[1] = prompt('asasd','');
// arrAnswers[2] = prompt('asasd','');
// console.log(arrAnswers)

// const newArr = arrAnswers.map(i => i+1);
// console.log(newArr);
// newArr.forEach(i => {
//     console.log(typeof i)
// })
// const stroke = prompt();

// console.log(`My name is ${stroke}`);

let arr = [1,2,3,4,5,6,7,8,9,10];

const newArr = arr.filter(i => i % 2 == 0)
console.log(newArr)

