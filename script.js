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

// let arr = [1,2,3,4,5,6,7,8,9,10];

// const newArr = arr.filter(i => i % 2 == 0)
// console.log(newArr)

// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: {},
//     privat: false,
// };

// let lastFilmWatched = prompt('Последний просмотренный фильм?');
// let rateOfFilm = +prompt('Какую оценку дадите фильму?');

// personalMovieDB.movies = {
//     [lastFilmWatched] : rateOfFilm,
// };

// console.log(personalMovieDB);

// if(true) console.log('Hi!');


// const num = 5;
// (num > 10) ? console.log('OK!') : console.log('Error!');

// switch (num) {
//     case 49:
//         console.log('Neverno');
//         break;
//     case 100:
//         console.log('Neverno');
//         break;
//     case 50:
//         console.log('Verno');
//         break;
//     default: 
//         console.log('Try next time');
//         break;
// }

// console.log(0 || 0 || false)
// console.log('kate' && 1 && 'sasha');

// let reportJhone, reportSam, reportMaria = 'done';
// console.log(reportJhone || reportSam || reportMaria)

// console.log(5 === 5 && 0 > 1 || 1);

// console.log(NaN || 2 || undefined);
// console.log(NaN && 2 && undefined);
// console.log(1 && 2 && 3);
// console.log(!1 && 2 || !3);
// console.log(25 || null && !3);
// console.log(NaN || null || !3 || undefined || 5);
// console.log(NaN || null && !3 && undefined || 5);
// console.log(5 === 5 && 3 > 1 || 5);

// let num = 55;

// while (num < 60) {
//     console.log(`${num} qqq`);
//     num++;
// }

// for (let i = 0; i < 10; i++) {
//     if(i === 5) {
//         break;
//         // continue;
//     }
//     console.log(`Цикл ${i}`)
// };

// let result = '';
// const length = 7;

// for(let i = 1; i < length; i++) {
//     for(let j = 0; j < i; j++) {
//         result += '*'
//     }
//     result += '\n';
// }

// console.log(result);

// for (let i = 5; i < 11; i++) {
//     console.log(i)
// };

// for (let i = 20; i > 9; i--) {
//     if (i === 13) break;
//     console.log(i)
// }

// for (let i = 2; i < 11; i++) {
//     if (i % 2 == 0) console.log(i);
// }

// let i = 2;

// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }

// let arrayOfNumbers = [];
// for(let i = 5; i < 11; i++) {
//     arrayOfNumbers[i - 5] = i;
//     // arrayOfNumbers.push(i) 
// }
// console.log(arrayOfNumbers);

// function firstTask() {
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//     for(let i = 0; i < arr.length; i++) {
//         result[i] = arr[i]
//     }
//     console.log(result);
// }
// firstTask();

// const data = [ 10, 20, 'Shopping', 40, 'Homework' ];
// let result = [];

// for(let i = 0; i < data.length; i++) {
//     if(typeof(data[i]) === 'string') result[i] = data[i] + ' - done';
//     if(typeof(data[i]) === 'number') result[i] = data[i]
// }

// for(let i = data.length; i > 0; i--) {
//     result.push(data[i - 1]);
// }

// console.log(result)

// //code wars
// function getDivisorsCnt(n){
//     // todo
//   let acum = 0;
//   for(let i = 1; i <= n; i++) {
//     if(n % i !== 0) continue;
//     acum++;
//   }
//   return acum;
// }

// console.log(getDivisorsCnt(4)) 

// function getGrade (s1, s2, s3) {
//     // Code here
//     let score = Math.round((s1 + s2 + s3) / 3);
//     console.log(score)
//     if(score >= 0 && score < 60) return 'F'
//     if(60 <= score && score < 70) return 'D'
//     if(70 <= score && score < 80) return 'C'
//     if(80 <= score && score < 90) return 'B'
//     if(90 >= score && score <= 100 && score > 100) return 'A'
//   }

//   getGrade(11.3,15,40)
//   getGrade(44,55,52)

// function powersOfTwo(n){
//   let acum = [];
//   for(let i = 0;i <= n; i++) {
//     acum.push(2 ** i)
//   }
//     return acum
//   }
//   console.log(powersOfTwo(2))

