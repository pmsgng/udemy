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

// const list = ["Ryan", "Kieran", "Jason", "Yous",'131'];

// function friend(friends){
//     //your code here
//     const myFriends = friends.filter((word) => {
//        if(isNaN(+word) && word.length < 5) return word;
//     })
//     return myFriends;
// }

// console.log(friend(list));

// // console.log(list.filter(word => word.length < 5));

// console.log(list.filter(word => {
//     if(isNaN(+word)) {
//         return word
//     }
// }));

// function cockroachSpeed(s) {
//     //Good Luck!
//     const cmS = s * 100000 / 3600;
//     return Math.floor(cmS)
//   }

//  console.log(cockroachSpeed(0));


//  function rentalCarCost(d) {
//     // Your solution here
//     let dayPrice = 40;
//     let threeDaysDiscount = 20;
//     let sevenDaysDiscount = 50;

//     if(d < 3) return d * dayPrice
//     if(d > 2 && d < 7) return d * dayPrice - threeDaysDiscount;
//     if(d > 6) return d * dayPrice - sevenDaysDiscount;
//   }

//   console.log(rentalCarCost(10));
//   console.log(7 * 40 - 50)


// function hero(bullets, dragons){
//     //Get Coding!
//       if(dragons * 2 <= bullets ) {
//         return true;
//       } else {
//         return false;
//       }
//     }

//     console.log(hero(1,0));



// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)

// function points(games) {
//     let ourTeamScore = 0;
//     games.forEach(game => {
//         if(game[0] > game[2]) ourTeamScore += 3;
//         if(game[0] < game[2]) return;
//         if(game[0] == game[2]) ourTeamScore += 1;
//     })
//     return ourTeamScore;
// }

// console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))

// let number = function(array) {
//     //your awesome code here
//     const newList = array.map((item,index) => {
//         return `${index + 1}: ${item}`
//     })
//     return newList
// }
// console.log(number(["a", "b", "c"]));



// function setAlarm(employed, vacation){
//     return employed === true && vacation === false
// }

// console.log(setAlarm(true,false))


// String.prototype.isUpperCase = function() {
//     // your code here
//     if(this.match(/[a-z]/)) {
//         return false
//     } else {
//         return true
//     }
// }

//   console.log('asdsadas'.isUpperCase())




// function getAge(inputString) {
//     // return the girl's correct age as an integer. Happy coding :) 
//     return +inputString.match(/[0-9]/)[0]
// }

// console.log(getAge('4 years'));




// function findNextSquare(sq) {
//     // Return the next square if sq is a perfect square, -1 otherwise
//     let number = Math.sqrt(sq);
//     if(Number.isInteger(number)) {
//         return Math.pow(++number, 2)
//     } else {
//         return -1;
//     }
//   }

//   console.log(findNextSquare(120)) 




// String.prototype.toAlternatingCase = function () {
//     // Define your method here :)
//     let newWords = [];
//     for (let i = 0; i < this.length; i++) {

//         if (this[i] === this[i].toUpperCase()) {
//             newWords.push(this[i].toLowerCase())
//         } else if (this[i] === this[i].toLowerCase()) {
//                 newWords.push(this[i].toUpperCase())
//         } else {
//             continue;
//         }
//     }
//     return newWords.join('');
// }

// console.log('hello world'.toAlternatingCase());



// function descendingOrder(n){
//     //...
//     return +`${n}`.split('').sort((a,b) => b - a).join('')
//   }

//   console.log(descendingOrder(123479));




// function rowSumOddNumbers(n) {
//     // TODO
//     let arrOdd = [];
//     let countNum = 0;
//     let numOdd = 1;
//     let sumOdd = 0;

//     for (let i = n; i > 0; i--) {
//         countNum += i;
//     }
//     // console.log(countNum)

//     for (let i = 1; i <= countNum; i++) {
//         arrOdd.push(numOdd)
//         numOdd += 2
//     }
//     // console.log(arrOdd);

//     for(let i = n; i > 0; i--) {
//         let numOfArr = arrOdd.length - i;
//         sumOdd = sumOdd + arrOdd[numOfArr]
//     }
//     // console.log(sumOdd)
//     return sumOdd;
// }

// console.log(rowSumOddNumbers(3));

// function doSecond() {
//     console.log('Do second.')
//   }

//   function doFirst(callback) {
//     setTimeout(function () {
//       console.log('Do first.')

//       callback()
//     }, 2000)
//   }

//   doFirst(doSecond)


// const users = [
//   {
//     id: 1,
//     name: 'Charlie',
//     job: 'Janitor',
//   },
//   {
//     id: 2,
//     name: 'Mac',
//     job: 'Bouncer',
//   },
//   {
//     id: 3,
//     name: 'Dee',
//     job: 'Aspring actress',
//   },
//   {
//     id: 4,
//     name: 'Dennis',
//     job: 'Bartender',
//   },
// ]

// const newUsers = [...users.filter(i => i.id !== 2)]
// console.log(newUsers);

// const filterUsers = [...users.filter(user => {
//   return user.name.includes('D')
// })]
// console.log(filterUsers)

// console.log(0 && 'good');

// class Car {
//   handle() {
//     console.log(this)
//   }
// }

// const car = new Car();

// function beep() {
//     car.handle();
// }

// beep();

// async await 
// async function getData() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();

//     return data;
//   } catch(error) {
//     console.log(error);
//   }
// }

// const dataJson = getData();

// console.log(dataJson)

// function getMathResult(num, lvl) {
//   let res = [];
//   if(lvl <= 0) return num;
//   for (let i = 1; i <= lvl; i++) {
//     res.push(num * i)

//   }
//   return res.join(',').replaceAll(',', '---');
// }
// console.log(getMathResult(10, 5));


// let word = 'Hello world!';

// console.log(word.slice(word.indexOf('world'),word.indexOf('world') + 5));

// console.log(parseInt('12.2rem'));
// console.log(parseFloat('12.2rem'));



// function calculateVolumeAndArea(lengthOfCube) {
//   const square = lengthOfCube ** 2 * 6;
//   const volume = lengthOfCube ** 3;

//   return `Объем куба: ${volume}, площадь всей поверхности: ${square}`
// }

// console.log(calculateVolumeAndArea(5));

// console.log('' == ' '.trim())

// function GO(walk, callback) {
//   console.log(`I wallk ${walk}km`);
//   callback();
// }

// function time() {
//   console.log('15 min')
// }

// GO(10, time)



// const copyObj = JSON.parse(JSON.stringify(obj))

// for(let key in obj) {
//   if(obj[key] == 'Anna') {

//   }
// }
// const notCopyObj = obj;

// notCopyObj.name = 'Sasha'
// copyObj.name = 'Kate'

// console.log(obj);
// console.log(copyObj);

// console.log(Object.keys(obj)); // [...keys]

// console.log(Object.keys(obj).length); // 4 length   

// obj.sayHello() // Hello 

// const {mom,dad} = obj.parents;
// const {age,name,job} = obj;
// console.log(mom);
// console.log(dad);
// console.log(name);
// console.log(age);
// console.log(job);

// const arr = [1,2,3,4,5,6,7];

// const newArr = arr.copyWithin()
// console.log(newArr);

// let age = () => {
//   return 5;
// }
// let name;
// console.log(name ?? age())


// const str = 'hasfui,gsaifu,asdad';
// let res = str.split(',');
// console.log(res);

// const arr = [1,2,3,4,5,6];
// const realCopy = [...arr];
// const copy = arr;
// copy.push(1);
// console.log(copy , arr);
// console.log(realCopy)


// let obj = {
//   name: 'Anna',
//   age: 22,
//   job: 'SBER',
//   parents: {
//     mom: 'Dasha',
//     dad: 'Oleg',
//   },
//   sayHello() {
//     console.log('Hello')
//   }
// }

// let newObj = {...obj};

// newObj.parents.mom = 'Kate';

// console.log(obj, newObj);
// let realCopy = JSON.parse(JSON.stringify(obj));

// realCopy.parents.mom = 'Natasha';

// console.log(realCopy)

// const copy = {...obj};
// copy.job = 'AIM';
// console.log(obj,copy);

// console.log(first)

// function getGrade(s1,s2,s3) {
//   let value = (s1 + s2 + s3) / 3;
//   if(0 <= value && value < 60) return 'F'
//   if(value >= 60 && value < 70) return 'D'
//   if(value >= 70 && value < 80) return 'C'
//   if(value >= 80 && value < 90) return 'B'
//   if(value >= 90 && value <= 100) return 'A'
// }

// console.log(getGrade(95,60,70))

// function fakeBin(x){
//   let newArr = [];
//   x.split('').forEach(i => {
//     if(i < 5) newArr.push(0);
//     if(i >= 5) newArr.push(1);
//   });
//   return newArr.join();
// }

// console.log(fakeBin('45385593107843568'));


// console.log(JSON.parse(JSON.stringify(obj)))


// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//       languages: ['ru', 'eng'],
//       programmingLangs: {
//           js: '20%',
//           php: '10%'
//       },
//       exp: '1 month'
//   },
//   showAgeAndLangs(obj) {
//     return `Мне ${obj['age']} и я владею языками: ${obj.skills.languages[0]} ${obj.skills.languages[1]}`
//   }
// };

// function showExperience(plan) {
//   const {skills: {languages, programmingLangs : {js , php} , exp}} = plan
//   return exp
// }
// console.log(showExperience(personalPlanPeter)) 

// function showProgrammingLangs(plan) {
//   const {skills: {languages, programmingLangs : {js , php}} , exp } = plan
//   return `Язык js изучен на ${js} Язык php изучен на ${php}`
// }
// console.log(showProgrammingLangs(personalPlanPeter))

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter))


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//   const [pet, an, al, li] = arr
//   return `Семья состоит из: ${pet} ${an} ${al} ${li}`
// }
// console.log(showFamily(family))

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//   arr.forEach(i => console.log(i.toLowerCase()))
// }
// standardizeStrings(family)


// let obj2 = {};

// function isEmpty(obj) {
//   for (let key in obj) {
//     // если тело цикла начнет выполняться - значит в объекте есть свойства
//     return false;
//   }
//   return true;
// }

// console.log(isEmpty(obj))
// console.log(isEmpty(obj2))

// let key = 'name';

// let obj = {
//   [key] : 'Anna',
//   age : 13,
// }
// console.log(obj[key])

// function makeUser (name,age) {
//   return {
//     name,
//     age,
//     contry: 'Russia'
//   }
// }

// let user = makeUser('Dima',20)
// console.log(user)

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
//   papa: {
//     dother: 'Masha',
//     son: {
//       name: 'Alex'
//     }
//   }
// };

// for(let key in user) {
//   console.log(key)
//   if(typeof user[key] === 'object') {
//     for(let key2 in user[key]) {
//       console.log(key2)
//     }
//   }
// }

// let codes = {
//   "+49": "Германия",
//   "+1": "США",
//   "+41": "Швейцария",
//   "+44": "Великобритания",
// };

// for (let code in codes) {
//   console.log(+code); 
// }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// function salSum(sal) {
//   let sum = 0;
//   for(let key in sal) {
//     sum += sal[key];
//   }
//   return sum;
// }

// console.log(salSum(salaries)); 

// до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//   for(let key in obj) {
//     typeof obj[key] === 'number' ? obj[key] *= 2 : null
//   }
//   return obj;
// }
// console.log(multiplyNumeric(menu)) 

// let o = {
//   age:14,
//   p: {
//     mom: "A",
//     dad: 'D'
//   }
// };

// let o2 = Object.assign({},o)
// let o3 = JSON.parse(JSON.stringify(o2)) // глубокое клонирования объекта 
// o3.p.dad = 14;
// console.log(o, o2, o3) 

// let o = {
//   a: 1,
//   b: {
//     c: 1,
//     d: {
//       e: 5
//     }
//   }
// };

// let clone = structuredClone(o); // new method to clone obj

// clone.b.d.e = 100;
// console.log(o , clone)

// function strCount(str, letter) {
//     return str.split(letter).length - 1
// }

// console.log(strCount('Letter','t'));


// console.log('aaadragon'.split('a'));
// console.log("98436271".split('').sort().join());

// const o = {
//     a:1,
//     b:2,
//     getThis() {
//         let arrFn = () => this;
//         return arrFn();
//     },
// }

//  const o2 = o;

// console.log(o2.getThis());

// function getThis() {
//     return this;
// }

// let fnn = () => this;

// console.log(getThis());
// console.log(fnn());


// const calc = {
//     read () {
//         let read = prompt('read');
//         this.read = read;
//     }
// };
// calc.read();
// console.log(calc);

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         // return this;
//     }
// }

// console.log(ladder.up() ,ladder)

// function User (name,age) {
//     this.name = name;
//     this.age = age; 
//     this.isBigBoy = true;

// }

// const user = new User('Alex',19);

// console.log(user);

// user.isBigBoy = false;

// console.log(user);

// function User () {
//     this.name = 'Alex';
//     this.age = 20;
//     this.isTrueName = function() {
//         if(this.age > 18) {
//             this.name = 'Sasha';
//             return this;
//         };
//     }
// }

// let user = new User;
// console.log(user.isTrueName())

// const o = {
//     name: 'Dima',
//     age: 22,
//     isDima() {
//         // берет this из внешнего окружения метода
//         let a = () => console.log(this)
//         a();
//         //берет this внутри метода 
//         let b = function second() {
//             console.log(this)
//         }
//         b();

//         return null;
//     }
// }
// console.log(o.isDima())

// function Calc () {
//     this.read = function() {
//         this.a = +prompt('Number first');
//         this.b = +prompt('Number second');
//     };
//     this.sum = function() {
//         let sum = this.a + this.b;
//         return sum;
//     };
//     this.mul = function() {
//         let mul = this.a * this.b;
//         return mul;
//     }
// }

// let calc = new Calc();

// calc.read();
// console.log(calc.a)
// console.log(calc.sum())
// console.log(calc.mul())

// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function() {
//         let newNum = +prompt('Number');
//         this.value += newNum;
//     };
// }

// let acum = new Accumulator(0);

// acum.read();
// acum.read();
// acum.read()
// console.log(acum.value);

// let user = {
//     read() {
//         console.log('good')
//     }
// };

// console.log(user.adress?.street);
// console.log(user.read?.());
// console.log(user.go?.());
// let user = {name: 'Alex'};
// let id = Symbol('id');
// user[id] = 'Our id';

// const user2 = JSON.parse(JSON.stringify(user))
// console.log(user[id])

// console.log(user2[id])

// console.log(parseInt('12px'),parseFloat('12px'))

// let fruits = ["Apple", "Orange", "Plum"];

// const btntest = document.querySelector('.main__btn');

// btntest.addEventListener('click', function click() {
//     if(this.innerText == 'CLICK!') {
//         this.innerText = 'CLACK!';
//         this.style.backgroundColor = 'green';
//     } else {
//         this.innerText = 'CLICK!';
//         this.style.backgroundColor = 'red';
//     }
// })

// let o = {
//     1: 1,
//     2: 2,
//     3: 3,
//     length: 3,
// }

// console.log(Array.from(o));

// let range = {
//     from: 1,
//     to: 5,
// }

// range[Symbol.iterator] = function () {
//     return {
//         current: this.from,
//         last: this.to,

//         next() {
//             if (this.current <= this.last) {
//                 return {
//                     done: false,
//                     value: this.current++
//                 }
//             } else {
//                 return {
//                     done: true
//                 }
//             }
//         }
//     }
// }

// for (let num of range) {
//     console.log(num)
// }

// let m = new Map([
//     [1 , '1'],
//     [2 , '2']
// ]);

// m.set(true , 'true')
// .set(1 , 'one')
// .set(2 , 'two')


// for( let n of m) {
//     console.log( n)
// }

// m.forEach( (val, key , map) => {
//     console.log(map)
// });

// const o = {
//     a: '1',
//     b: '2',
//     c: '3',
//     d: '4'
// };
// const o2 = [
//     [true , 2],
//     [2 , null]
// ];

// console.log(Object.fromEntries(o2))

// for( let i in Object.fromEntries(o2)) {
//     console.log(typeof i)
// }


// let newM = new Map(Object.entries(o))
// console.log(newM);

// console.log(Object.fromEntries(newM))

// const m = new Map([
//     ['one',2],
//     [3,4],
//     [5,6]
// ]);

// console.log(Object.fromEntries(m));

// function unique(arr) {
//     /* ваш код */
//     let m = new Set(arr);
//     return Array.from(m);
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(unique(values));

// function Do(a,b,c) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//     this.do = () => {
//         return this.a + this.b + this.c
//     };
//     this.go = function () {
//         return this;
//     };
//     this.up = () => {
//         return this;
//     }
// }

// let res = new Do(1,2,3);

// console.log(res.do());
// console.log(res.go());
// console.log(res.up());

// function getUsers(usersCount) {
//     const count = usersCount; 
//     const users = new Set();

//     for(let i = 0; i < count; i++) {
//         let user = prompt();
//         users.add(user)
//     };

//     return console.log(Array.from(users).map(i => i.toUpperCase()));
// }

// getUsers(2);  

// let john = { name: "John" };

// let map = new Map();
// map.set(john, "sdasd");

// john = null;

// console.log(map.entries())

// let john = { name: "John" };

// let weakMap = new WeakMap();
// weakMap.set(john, "...");

// john = null;

// console.log()

// // 📁 visitsCount.js
// let visitsCountMap = new Map(); // map: пользователь => число визитов

// // увеличиваем счётчик
// function countUser(user) {
//   let count = visitsCountMap.get(user) || 0;
//   visitsCountMap.set(user, count + 1);
// }
// let userPasha = {name: 'pasha', age: 22};
// let userMasha = {name: 'masha', age: 20};

// countUser(userPasha);
// countUser(userPasha);

// countUser(userMasha)
// console.log(visitsCountMap)

// let messages = [{
//         text: "Hello",
//         from: "John"
//     },
//     {
//         text: "How goes?",
//         from: "John"
//     },
//     {
//         text: "See you soon",
//         from: "Alice"
//     }
// ];


// const readMesMap = new WeakMap();
// const readMesSet = new WeakSet();

// const userJohn = messages[0];

// readMesMap.set(userJohn);

// readMesSet.add(userJohn);


// console.log(readMesMap.has(userJohn))
// console.log(readMesSet.has(userJohn))
// console.log(readMesSet)

// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
//   };

// const pricesArr = Object.entries(prices);  // массив пар

// const newArr = pricesArr.map(([key , value ]) => [key , value * 2]); // измененный массив пар 

// const newPrices = Object.fromEntries(newArr); // возвращаем новый объект c ценами

// console.log(newPrices)

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };

// const sumSalaries = (salaries) => {
//    const salArr = Object.values(salaries);
//    let sumSal = 0;

//    for(let sal of salArr) {
//     sumSal += sal
//    }
//    return sumSal;
// }

// console.log(sumSalaries(salaries)) 


// let user = {
//     name: 'John',
//     age: 30
//   };

// const count = (obj) => {
//     return Object.entries(obj).length
// }

// console.log(count(user)) 

// let [firstName, surname] = "Ilya Kantor".split(' ');

// console.log(`1:${firstName} 2:${surname}`)

// let user = {
//     name: "John",
//     years: 30
//   };

// let {name , years , isAdmin = false} = user;

// console.log(name, years , isAdmin) ;

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };

//   for(let [name, sal] of Object.entries(salaries)) {
//     console.log(sal)
//   }

// const o = {
//   a: 1,
//   b: 2,
//   c: 3,
// }

// console.log(Object.entries(o))

// let [firstName, , ,title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// console.log(title)

// let map = new Map([
//   ['name','Alice'],
//   ['age', 15]
// ]);

// console.log(map);

// const o = Object.fromEntries(map);
// console.log(o)
// console.log(Object.entries(o))

// for(let key in o) {
//   console.log(`${key} : ${o[key]}`)
// }

// for(let [key,value] of map ) {
//   console.log(`${key} : ${value}`)
// }

// let john = { name: "John" };

// let array = [ john ];

// john = null;

// console.log(array[0])
// console.log(array[0])

// let wm = new WeakMap([
// [john , 'name']
// ]);
// console.log(wm.has(john))
// john = null;
// console.log(wm.has(john)) 



// let visitsCountMap = new WeakMap(); // map: пользователь => число визитов

// увеличиваем счётчик
// function countUser(user) {
//   let count = visitsCountMap.get(user) || 0;
//   visitsCountMap.set(user, count + 1);
// }


// let john = { name: "John" };

// countUser(john); //ведём подсчёт посещений

// countUser(john); //ведём подсчёт посещений

// countUser(john); //ведём подсчёт посещений
// console.log(visitsCountMap.has(john))


// // пользователь покинул нас
// john = null;
// console.log(visitsCountMap.has(john))
// const o = {name: 'Alice'};

// const wm = new WeakMap([
//     [o , 'Alice']
// ]);
// console.log(wm.has(o))

// let user = {
//     name: 'John',
//     age: 30
// };

// function count(o) {
//     return Object.values(o).length;
// }

// console.log(count(user)) 
// let guest = 'alex';
// let admin = 'dima';

// [guest, admin] = [admin, guest];
// console.log(guest, admin);

// let str = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// let [first , second, ,...and] = str;

// console.log(first)
// console.log(and)

// let options = {
//     title: "Menu",
//     width: 100,
//     height: [],
//   };
// let {title: t , width: w, height: h} = options;
// console.log(w);
//   let {title , width , height} = options;
//   console.log(typeof title ,typeof width ,typeof height)



// let options = {
//     title: "My menu",
//     items: ["Item1", "Item2"]
//   };

//   function showMenu({
//     title = "Untitled",
//     width: w = 100,  // width присваиваем в w
//     height: h = 200, // height присваиваем в h
//     items: [item1, item2] // первый элемент items присваивается в item1, второй в item2
//   }) {
//     console.log( `${title} ${w} ${h}` ); // My Menu 100 200
//     console.log( item1 ); // Item1
//     console.log( item2 ); // Item2
//   }

//   showMenu(options);

// let date = new Date();
// let days = ['Воскресенье', 'Понедельник', 'Вторник','Среда', 'Четверг', 'Пятница', 'Суббота'];
// let month = ['Январь', "Февраль" , "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

// console.log(`Today: ${date.getDate()} ${month[date.getMonth()]} ${days[date.getDay()]}`)

// let d = new Date(2012 , 1, 20, 3, 12);

// const pow = (x , n) => {
//   if(n == 1) {
//     return x;
//   } else {
//     return x * pow(x , n - 1)
//     //1)   2 * pow(2, 3)
//     //2)   2 * pow(2, 2)
//     //3)   2 * pow(2, 1)
//     // Итог: 2 * 2 = 4,  2 * 4 = 8, 2 * 8 = 16! 
//   }
// }

// console.log(pow(2,4))

// function args() {
//     return arguments
// }

// console.log(args(1,2,3,4))

// let arr1 = [1,2,3,4];
// let arr2 = [5,6,7,8];

// let arr3 = [...arr1,...arr2];
// console.log(arr3)

// let s = 'Hi how are u';
// console.log([...s])
// let ar = [...s];
// console.log(ar.join(''))

// let name = "John";

// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi();

// function makeWorker() {
//     let name = "Pete";

//     return function() {
//       console.log(name);
//     };
//   }

//   let name = "John";

//   // create a function
//   let work = makeWorker();
//   // call it
//   work();

// function sayHiBye(firstName, lastName) {

//     // функция-помощник, которую мы используем ниже
//     function getFullName() {
//         return firstName + " " + lastName;
//     }

//     console.log("Hello, " + getFullName());
//     console.log("Bye, " + getFullName());

// }

// sayHiBye('Dima', 'Kovalenko')

// function makeCounter() {
//     let count = 0;

//     return () => {
//       return count++; // есть доступ к внешней переменной "count"
//     };
//   }

//   let counter = makeCounter();
//   let counter2 = makeCounter();

//   console.log(counter())
//   console.log(counter())
//   console.log(counter2())

// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
//   sayHi();
// }


// function sum(a) {
//     return function(b) {
//         return a + b;
//     }
// };

// console.log(sum(1)(2));


// let array = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(from,to) {
//     return 
// }

// function inArray(arr) {

// }

// function makeWorker() {
//   let name = "Pete";

//   return function() {
//     console.log(name);
//   };
// }

// let name = "John";

// // create a function
// let work = makeWorker();

// // call it
// console.log(work())


// let name1 = 'Alex';
// let name2 = 'Dima';


// function changeName(n2) {
//     name1 = 'Vasya';
//     n2 = 'Kate';
// }
// changeName(name2);
// console.log(name1 , name2)


// function makeCounter() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     }
// }

// let counter1 = makeCounter();
// let counter2 = makeCounter();

// counter1();
// counter1();
// counter1();

// counter2();

// console.log(counter1())
// console.log(counter2())

// function getUser(firstname, lastname) {
//     function getFullNameUser() {
//         return firstname + ' ' + lastname;
//     }
//     console.log(getFullNameUser())
// }
// const user1 = getUser('Maria', 'Conovalova');
// const user2 = getUser('Dima', 'Kovalenko');

// function User() {
//     this.userName = prompt()
//     this.sayHi = () => {
//         alert(`Hi ${this.userName}`)
//         console.log(this)
//     }
//     this.getAge = function() {
//         console.log(this)
//         return () => {
//             console.log(this)
//             return null
//         }
//     }
// }

// const newUser = new User();

// newUser.sayHi();
// newUser.getAge();

// const newThis = newUser.getAge()

// console.log(newThis());

// function makeArmy() {
//     let shooters = [];

//     // let i = 0;
//     // while (i < 10) {
//     //   let shooter = function() { // функция shooter
//     //     alert( i ); // должна выводить порядковый номер
//     //   };
//     //   shooters.push(shooter);
//     //   i++;
//     // }
//     for(let i = 0; i < 10; i++) {
//         shooters.push(i)
//     }

//     return shooters;
//   }

//   let army = makeArmy();

//   console.log(army)


// function sayHi() {
//     console.log("Hi");

//     // давайте посчитаем, сколько вызовов мы сделали
//     sayHi.counter++;
// }
// sayHi.counter = 0; // начальное значение

//   sayHi(); // Hi
//   sayHi(); // Hi

//   console.log( `Вызвана ${sayHi.counter} раза` );

// let sayHi = function func(who) {
//     if (who) {
//       console.log(`Hello, ${who}`);
//     } else {
//       sayHi("Guest"); // Теперь всё в порядке
//     }
//   };

//   let welcome = sayHi;
// //   sayHi = null;

//   welcome(); 
//   welcome();



//   function makeCounter() {
//     let count = 0;

//     function counter() {
//         return count++;
//     }
//     counter.set = (value) => count = value;
//     counter.decrease = () => count--;

//     return counter
//   }

//   let counter = makeCounter();

//   console.log( counter() ); // 0
//   console.log( counter() ); // 1

//   counter.set(10); // установить новое значение счётчикаs

//   console.log( counter() ); // 10

//   counter.decrease(); // уменьшить значение счётчика на 1

//   console.log( counter() ); // 10 (вместо 11)

// let func = new Function('a,b,c' , 'return a,b,c');


// let who = function hi(who) {

//     if(who) {
//         console.log(`go ${who}`)
//     } else {
//         console.log('go bro')
//     }
// }

// who()

// function getValue() {
//     let val = 1111;
//     console.log(val)
// }

// let val = '13';

// getValue()

// function time(min, sec) {
//     console.log(`Now ${min} minutes ${sec} seconds`)
// }

// setInterval(time,2000,'15','03')
// let i = 0;
// function run() {
//     i++;
//     if(i > 10) return i;
//     console.log(i)
//     setTimeout(run,1000)
// }

// const time = setTimeout(run,1000);

// function printNumbers(from, to) {
//     let cur = from;
//     function go() {
//         console.log(cur);
//         if(cur == to) {
//             clearInterval(timerId)
//         }
//         cur++;
//     };

//     go();
//     let timerId = setInterval(go, 1000);
// }

// printNumbers(0, 60);

// function printNumbers(from, to) {
//     let cur = from;

//     function go() {
//         console.log(cur);
//         if(cur < to) {
//             setTimeout(go, 1000);
//         }
//         cur++;
//     }
//     setTimeout(go)
// }

// printNumbers(1,10)

// let map = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('meat', 4);
// map.set({o : 'a'} , '13')

// console.log(map.entries())



// console.log(Object.fromEntries(map.entries()))

// function a() {
//     return this.name;
// }

// let obj = {
//     name : 'Alice',
// }

// console.log(a.call(obj));

// function slow(x) {
//     console.log(`Called with ${x}`);
//     return x;
// }

// function cachingDecorator(func) {
//     let cache = new Map();

//     return function(x) {
//         if(cache.has(x)) {
//             return cache.get(x)
//         }

//         let result = func(x);

//         cache.set(x , result)

//         return result;
//     }
// }

// slow = cachingDecorator(slow);

// console.log(slow());


// function slow(x) {
//     // здесь могут быть ресурсоёмкие вычисления
//     console.log(`Called with ${x}`);
//     return x;
//   }

//   function cachingDecorator(func) {
//     let cache = new Map();

//     return function(x) {
//       if (cache.has(x)) {    // если кеш содержит такой x,
//         return cache.get(x); // читаем из него результат
//       }

//       let result = func(x); // иначе, вызываем функцию

//       cache.set(x, result); // и кешируем (запоминаем) результат
//       return result;
//     };
//   }

//   slow = cachingDecorator(slow);

//   console.log( slow(1) ); // slow(1) кешируем
//   console.log( "Again: " + slow(1) ); // возвращаем из кеша

//   console.log( slow(2) ); // slow(2) кешируем
//   console.log( "Again: " + slow(2) ); // возвращаем из кеша

//   console.log(slow(6))
//   console.log(slow(6))
//   console.log(slow(6))
//   console.log(slow(1))
//   console.log(slow(5))
//   console.log(slow([1,2,3,4]))
//   console.log(slow({1: '12331'}))

// const o = {
//     a : 1,

//     b(x) {
//         return this.a + x
//     }
// };

// let ab = o.b;

// console.log(ab.call(o, 2))

// function callC() {
//     console.log(this.name)
// }

// let o = {
//     name: 'Dima',
// }

// let o2 = {
//     name: 'Kate'
// }

// callC.call(o);
// callC.call(o2);

// function c(x,y) {
//     return x + y + this.a;
// }

// let o = {
//     a : 1,
// }

// console.log(c.call(o, 1, 2))
// console.log(c.apply(o, [2,2,3,4]))

// function work(a, b) {
//     alert( a + b ); // произвольная функция или метод
//   }

//   function spy(func) {

//   }

//   work = spy(work);

//   work(1, 2); // 3
//   work(4, 5); // 9

//   for (let args of work.calls) {
//     alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
//   }

// let user = {
//   firstName: "Вася",
//   sayHi() {
//     console.log(`Привет, ${this.firstName}!`);
//   }
// };

// setTimeout(user.sayHi.bind(user), 1000);  

// function partial(func, ...argsBound) {
//   return function(...args) { // (*)
//     return func.call(this, ...argsBound, ...args);
//   }
// }

// использование:
// let user = {
//   firstName: "John",
//   say(time, phrase) {
//     console.log(`[${time}] ${this.firstName}: ${phrase}!`);
//   }
// };

// let user2 = {
//   firstName: "Alex",
//   say(time, phrase) {
//     console.log(`[${time}] ${this.firstName}: ${phrase}!`);
//   }
// };

// // добавляем частично применённый метод с фиксированным временем
// user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

// user.sayNow("Hello");

// user2.sayNow = partial(user2.say, new Date().getHours() + ':' + new Date().getMinutes());

// user2.sayNow('Hi!');

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false) );

// let user = {
//     name: 'Alex',
//     hello() {
//         console.log(`Hello, ${this.name}`)
//     },
//     hi() {
//         return () => {
//             return this
//         }
//     }
// }

// user.hello()

// console.log(user.hi()())

// let o = {
//     name: 'Alex',
//     age: 22,
// }

// let descriptor = Object.getOwnPropertyDescriptor(o, 'name');

// console.log(descriptor)

// Object.defineProperty(o, 'name' , { writable: false});

// console.log(
//     Object.getOwnPropertyDescriptor(o, 'name')
// )

// let user = {};

// Object.defineProperty(user , 'name', {
//     value: '100',
//     writable: false,
//     enumerable: true,
//     configurable: true,
// })

// console.log(user);

// console.log(Object.getOwnPropertyDescriptor(user , 'name'));

// const o = {
//     game: 'dota2',
//     user: 'Alex',
//     age: 15,
// };

// console.log(Object.entries(o).forEach(i => console.log(i[0])));

// Object.freeze(o);

// console.log(Object.isFrozen(o));

// Object.freeze(o);

// console.log(Object.isFrozen(o));

// let user = {
//     name: 'Alex',
//     surname: 'Badalov',

//     get fullName() {
//         return `${this.name} ${this.surname}`
//     }
// }

// console.log(user.fullName)

// console.log('asdasd a'.split('s'))



// let user = {
//     get name() {
//         return this._name;
//     },

//     set name(value) {
//         if (value.length <= 4) {
//             console.log("Имя слишком короткое, должно быть более 4 символов");
//             return;
//         }
//         this._name = value;
//     }
// };

// user.name = 'Alex'
// console.log(user.name);






// let animal = {
//     eats: true,
//     walk() {
//       console.log("Animal walk");
//       return null;
//     }
//   };

//   let rabbit = {
//     jumps: true,
//     __proto__: animal,
//   };
//   rabbit.__proto__ = animal;

//   // walk взят из прототипа
//   rabbit.walk();

// const name = {
//     name: 'Alex',
// }

// const surName = {
//     surname: 'Badalov',
// }

// Object.setPrototypeOf(name , surName);

// console.log(name.surname); // surname прототип ! 


// let user = {
//     name: 'Alex',
//     surname: 'Badalov',

//     set fullName(val) {
//         [this.name, this.surname] = val.split(' ')
//     },

//     get fullName() {
//         return `${this.name} ${this.surname}`
//     },
// }

// let admin = {
//     __proto__: user,
//     isAdmin: true,
// }

// console.log(admin.fullName)
// admin.fullName = 'Kate Gavrilova';
// console.log(admin.fullName);

// const timer = {
//     count : 0,
//     plus() {
//         this.count++;
//     }
// }

// const timer2 = {
//     count: 0,
//     __proto__: timer,
// }

// const timer3 = {
//     count: 0,
//     __proto__: timer,
// }

// timer2.plus();
// timer2.plus();
// console.log(timer2.count)
// timer3.plus();
// console.log(timer.count)
// console.log(timer3.count)

// for(let prop in timer2) {
//     // console.log(prop)
//     let isOwn = timer2.hasOwnProperty(prop);
//     console.log(isOwn)
// }

// function F(name) {
//     this.name = name;
// }

// let f = new F('alex');



// let hamster = {
//     stomach: [],
//     eat(food) {
//         this.stomach.push(food);
//     }
// };

// let speedy = {
//     stomach: [],
//     __proto__: hamster
// };

// let lazy = {
//     stomach: [],
//     __proto__: hamster
// };


// speedy.eat("apple");
// speedy.eat('cherry');
// console.log(speedy)


// lazy.eat('banana');
// lazy.eat('mashroom')
// console.log(lazy)

// let user = {
//     name: 'Alex'
// }

// Object.defineProperty(user, 'name' , {
//     writable: false,
// })

// // user.name = 'Sasha'
// delete user.name;

// console.log(user)

// function User(name, birthday) {
//     this.name = name,
//     this.birthday = birthday,

//     Object.defineProperty(this, 'age', {
//         get() {
//             let todayYear = new Date().getFullYear();
//             console.log(todayYear)
//             return todayYear - this.birthday.getFullYear()
//         }
//     })
// }

// let alex = new User('Alex', new Date(1992, 6, 1))

// console.log(alex.birthday)
// console.log(alex.age)

// function Car(car, age) {
//     this.car = car
//     this.age = age
// }


// let kia = new Car('Kia', '2 years');

// let btnsHeader = document.querySelectorAll('.header__navbar-item');

// btnsHeader.forEach(btn => {
//     btn.addEventListener('click' , () => {
//         alert('hi   ')
//     })
// });

// let head = {
//     glasses: 1
//   };

//   let table = {
//     pen: 3,
//     __proto__: head,
//   };

//   let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table,
//   };

//   let pockets = {
//     money: 2000,
//     __proto: bed,
//   };

// function Rabbit(name) {
//     this.name = name;
//     console.log(name);
// }

// let rabbit = new Rabbit('Alex');

// let rabbit2 = new rabbit.constructor('Dima');

// console.log(rabbit2)


// let animalBelka = {
//     name: 'belka',
// };

// let animalDog = { 
//     name: 'dog',
// };

// function Cat() {};

// Cat.prototype = animalDog;

// let cat = new Cat();

// console.log(cat.name);

// function User(name) {
//     this.name = name;
// }

// let user = new User('Alex');

// let user2 = new user.constructor('Kate');

// console.log(user2.name)

// console.log(Array.prototype)

// let obj = {
//     a: 3,
// }

// console.log(obj)

// let animal = {
//     name: 'zayac',
//     isEat: true,
//     go() {
//         console.log('Its walk!')
//     }
// };

// let animal2 = {
//     name: 'belka',
//     isEat: false,
// };

// animal2.__proto__ = animal;

// animal2.go();

// let animal = {
//     sleep() {
//         this.isSleeping = true;
//     },

//     walk() {
//         if (!this.isSleeping) {
//             console.log('I walk');
//         } else {
//             console.log('I sleep')
//         }
//     },
// };

// let rabbit = {
//     name: 'White Rabbit',
//     __proto__: animal,
// };

// rabbit.sleep();

// rabbit.walk();

// let a = {
//     name: 'Alice',
//     isAdmin: true,
// };

// let b = {
//     name: 'Dima',
//     __proto__: a,
// }


// for(let prop in b) {
//     let isOne = Object.hasOwn(b, prop);

//     if(isOne) {
//         console.log(`This one b prop: ${prop}`)
//     } else {
//         console.log(`Inherited prop: ${prop}`)
//     }
// };

// function User(name) {
//     this.name = name;
// }

// let user = new User('Kate');

// let user2 = new user.constructor('Dima');

// console.log(user, user2);


// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit(); // конструктор вызван и свойство установлены в объекте

// Rabbit.prototype = {};

// let rabbit2 = new Rabbit();
// console.log(rabbit.__proto__)
// console.log( rabbit.eats );
// console.log(rabbit2.__proto__)

// function Rabbit(name) {
//     this.name = name;
// }
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit('Pete');
// console.log(rabbit)
// console.log(rabbit.__proto__)
// console.log(rabbit.eats)

// Rabbit.prototype.eats = false;

// console.log( rabbit.eats ); 

// function User() {};

// User.prototype = {
//     isAdmin: true,
// };

// let user = new User();

// User.prototype = {
//     isAdmin: 'what'
// }
// console.log(user.isAdmin) //true 


// let user2 = new User();

// console.log(user2.isAdmin) //what

// User.prototype.isAdmin = false;

// console.log(user.isAdmin)
// console.log(user2.isAdmin)
// console.log(User.prototype)

// function Obj(){};

// let obj = new Obj();

// let obj2 = new obj.constructor();


// function User(name) {
//     this.name = name;
// }

// let user = new User('Alex');

// let user2 = new user.constructor('Dima');

// console.log(user);
// console.log(user2);

// console.log([1,2,3])

// String.prototype.sayHi = function() {
//     console.log('Hello world!')
// }

// '.'.sayHi();

// if (!String.prototype.repeat) { // Если такого метода нет
//     // добавляем его в прототип

//     String.prototype.repeat = function(n) {
//       // повторить строку n раз

//       // на самом деле код должен быть немного более сложным
//       // (полный алгоритм можно найти в спецификации)
//       // но даже неполный полифил зачастую достаточно хорош для использования
//       return new Array(n + 1).join();
//     };
//   }

//   console.log( "La".repeat(3) );

// const o = {
//     _name: 'Pete',
//     get name() {
//         return this._name
//     },
//     set name(value) {
//         this._name = value
//     },
// }

// console.log(o.name)
// o.name = 'Alex';

// console.log(o.name)

// function f() {
//     console.log("Hello!");
// }

// Function.prototype.defer = function(ms) {
//     setTimeout(this, ms);
// }

// f.defer(2000);

// function f(a, b) {
//     console.log(a + b);
// }

// Function.prototype.defer = function(time) {
//     let thisFunc = this;
//     return function(a,b) {
//         setTimeout(() => {
//             thisFunc(a,b)
//         },time)
//     }
// }

// f.defer(1000)(2, 2);

// function Car(brand,year) {
//     this.brand = brand;
//     this.year = year;
//     this.go = () => {
//         console.log('Go ' + this.brand)
//     }
// };

// // const mercedes = new Car('Mercedes' , 2020);

// // console.log(mercedes)
// const car = new Car('Mercedes', 2020);

// car.go()

// function Rabbit(name) {
//     this.name = name;
// }
// Rabbit.prototype.sayHi = function () {
//     console.log(this.name);
// };

// let rabbit = new Rabbit("Rabbit");

// rabbit.sayHi();

// Rabbit.prototype.sayHi();

// class Clock {
//     constructor({template}) {
//         this.template = template;
//     }

//     render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if(hours < 10) hours = "0" + hours;

//         let mins = date.getMinutes();
//         if(mins < 10) mins = '0' + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         let output = this.template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);

//       console.log(output);
//     }

//     stop () {
//       clearInterval(this.timer);
//     };

//     start () {
//       this.render();
//       this.timer = setInterval(() => this.render(), 1000);
//     };

// }

// let clock = new Clock({template: 'h:m:s'});

// // clock.start();

// // setInterval(() => clock.stop(), 10001);

// let date = new Date();

// const month = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']

// console.log(`Today ${date.getDate()} ${month[date.getMonth()]}`)

// class Animal {
//   constructor(name, age, animal) {
//     this.name = name;
//     this.age = age;
//     this.animal = animal;
//   }
//   go() {
//     console.log(`${this.name}, lets go!`)
//   }
// }

// class Cat extends Animal {
//   constructor(name,age,animal) {
//     super(name,age,animal)
//   }
//   sayMiy() {
//     console.log(`Miyyyy, I'm ${this.animal}`)
//   }
// }

// let cat = new Cat('Alex', 7 ,'Cat');

// console.log(cat.sayMiy())

// class CatDog extends Cat {
//   constructor(name,age,animal) {
//     super(name,age,animal)
//   }
//   isDogCat() {
//     console.log('Who are you?')
//   }
// }

// let catDog = new CatDog('Pete',12,'Cat-Dog');

// console.log(catDog.sayMiy());
// catDog.isDogCat()



// class User {
//   constructor(name,age,password) {
//     this.name = name;
//     this.age = age
//     this.password = password
//   }
//   isAdmin() {
//     if(this.name == 'Admin' || this.name == 'admin' || this.name == 'Vlad') {
//       console.log('Welcome,admin!')
//     } else {
//       console.log('You need administrator rights!')
//     }
//   }
// }

// let user = new User('Alex', 22, 'qwerty123456');

// class Admin extends User {
//   constructor(name,age,password) {
//     super(name,age,password)
//   }
//   getPassword(user) {
//     console.log(`${user.password} - pass of user ${user.name}`)
//   }
// }

// let admin = new Admin('Vlad', 25 , '03041996');

// admin.getPassword(user)

// admin.isAdmin()
// user.isAdmin()  

// class User {
//   constructor(name, age, male) {
//     this.name = name
//     this.age = age
//     this.male = male;
//   }
// }

// class InstaUser extends User {
//   constructor(name, age, male, socialNetwork) {
//     super(name, age, male)
//     this.socialNetwork = socialNetwork
//   }
//   get userName() {
//     return this.name
//   }

//   set userName(name) {
//     this.name = name
//   }
// }

// const userIvan = new User('Ivan' , 22, 'male');

// const instaUserPeter = new InstaUser('Peter', 18, 'male', 'Instagram');

// console.log(userIvan);
// console.log(instaUserPeter);

// userIvan.name = 'Alex';

// console.log(userIvan)

// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
//     }

//     hide() {
//         this.$el.style.display = 'none'
//     }

//     show() {
//         this.$el.style.display = 'block'
//     }
// }

// class Box extends Component {
//     constructor(options) {
//         super(options.selector)

//         this.$el.style.width = this.$el.style.height = options.size + 'px'
//         this.$el.style.background = options.color
//         this.$el.style.display = options.display
//     }
// }

// const box1 = new Box({
//     selector: '.main__block',
//     size: 100,
//     color: 'red',
//     display: 'block'
// });

// console.log(box1)

// const btn = document.querySelector('.main__btn');

// btn.addEventListener('click', () => {
//     if(box1.$el.style.display == 'block') {
//         box1.hide()
//     } else {
//         box1.show()
//     }

//     if(circle1.$el.style.display == 'none') {
//         circle1.show()
//     } else {
//         circle1.hide()
//     }
// })


// class Circle extends Box {
//     constructor(options) {
//         super(options)

//         this.$el.style.borderRadius = '3rem'
//     }
// }

// const circle1 = new Circle({
//     selector: '.main__circle',
//     size: 100,
//     color: 'gray',
//     display: 'none',
// })

// class CoffeeMachine {
//     _waterAmount = 0; // количество воды внутри

//     set waterAmount(value) {
//         if(value < 0) throw new Error('Отрицательное значение воды')
//         this._waterAmount = value
//     }

//     get waterAmount() {
//         return this._waterAmount;
//     }

//     constructor(power) {
//       this.power = power;
//       console.log( `Создана кофеварка, мощность: ${power}` );
//     }

//   }

//   // создаём кофеварку
//   let coffeeMachine = new CoffeeMachine(100);

//   // добавляем воды
//   coffeeMachine.waterAmount = 200;

// class CoffeeMachine {

//     #waterAmount = 0;

//     get waterAmount() {
//       return this.#waterAmount;
//     }

//     set waterAmount(value) {
//       if (value < 0) throw new Error("Отрицательный уровень воды");
//       this.#waterAmount = value;
//     }
//   }

//   let machine = new CoffeeMachine();


//   class User {
//     #userAge = 18;

//     get userAge() {
//         if(this.#userAge > 17) {
//             return this.#userAge
//         } else {
//             return `User age shuld be ${this.#userAge} y.o. or more than ${this.#userAge} y.o.!`
//         }
//     }

//     set userAge(value) {
//         if(value < 18) {
//             return console.log('So young!')
//         } else {
//             this.#userAge = value;
//         }
//     }
//     constructor(options) {
//         this.name = options.name
//         this.male = options.male
//     }
//   }

// let user1 = new User({
//     name: 'Max',
//     male: 'Male'
// })

// console.log(user1.userAge)
// user1.userAge = 10;
// user1.userAge = 19;
// console.log(user1.userAge)

// const o1 = {
//     a:1
// }

// const o2 = {
//     b:2

// }

// const o3 = {
//     c:3,
//     d: {
//         e: 4,
//         f: 5,
//         g: {
//             h: () => console.log('hi!')
//         }
//     }
// }

// const obj = Object.assign({} , o1, o2 , o3)


// try {

//     console.log('Начало блока try');  // (1) <--

//     lalala; // ошибка, переменная не определена!

//     console.log('Конец блока try (никогда не выполнится)');  // (2)

//   } catch(err) {

//     console.log(`Возникла ошибка!`); // (3) <--

//   }

// setTimeout( () => {
//     try {
//         lala
//     } catch (e) {
//         console.log('mistake!')
//         console.log(e.name)
//         console.log(e.message)
//         console.log(e.stack)
//     }
// }, 1000)


// let data = '{"age": "13"}';
// try {
//     let user = JSON.parse(data);

//     if(!user.name) throw new Error('Ooops,user has no name!')
// } catch(e) {
//     console.log(e)
// }

// function readData() {
//     let json = '{ "age": 30 }';

//     try {
//       // ...
//       blabla(); // ошибка!
//     } catch (e) {
//       // ...
//       if (e.name != 'SyntaxError') {
//         throw e; // проброс исключения (не знаю как это обработать)
//       }
//     }
//   }

//   try {
//     readData();
//   } catch (e) {
//     console.log( "Внешний catch поймал: " + e ); // поймал!
//   }

// function a(name, callback) {
//     console.log(name);
//     callback();
// }

// a('Kate done', () => console.log('second fnn done'))

// let promise = new Promise((res, rej) => {
//     setTimeout( () => {
//         console.log(res('done')) 
//     }, 100)
// })

// let promise = new Promise(function(resolve, reject) {
//     // эта функция выполнится автоматически, при вызове new Promise

//     // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
//     setTimeout(() => resolve("done"), 1000);
//   });

// new Promise((resolve, reject) => {
//     throw new Error("error");
//   })
//     .finally(() => console.log("Промис завершён")) // срабатывает первым
//     .catch(err => console.log(err.name));

// function delay(ms) {
//     // ваш код
//     return new Promise(res => setTimeout(res, ms))
//   }

//   delay(3000).then(() => console.log('выполнилось через 3 секунды'));

// let promise = new Promise(res => {
//     setTimeout(() => res([1,2,3]),2000)
// })


// let promise2 = new Promise(res => {
//     setTimeout(() => res('good'),1500)
// })

// let promise3 = new Promise(rej => {
//     setTimeout(() => rej(new Error('Ooooops!')),5000) 
// })

// Promise.all([promise,promise2,promise3])
// .then(data => data.forEach(i => console.log( i)))
// .catch(err => console.log(err))

// function delay(ms) {
//     // ваш код
//     return new Promise(res => {
//         setTimeout(() => res('good'),ms)
//     })
//   }

//   delay(3000).then((data) => console.log(`'${data}' done 3 sec`));


// let promise = new Promise(res => {
//     setTimeout(() => res(10), 2000)
// }).then(data => {
//     setTimeout(() => {
//         console.log(data)
//         return data *2
//     },2000)
// })

// new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(1), 1000); // (*)

//   }).then(function(result) { // (**)

//     // console.log(result); // 1
//     setTimeout(() => {
//         console.log(result)
//     },2000)
//     return result * 2;

//   }).then(function(result) { // (***)
//     setTimeout(() => console.log(result),3000)
//     // console.log(result); // 2
//     return result * 2;

//   }).then(function(result) {

//     console.log(result); // 4
//     return result * 2;

//   });

// const promise = new Promise(resolve => {
//     setTimeout(() => {
//         return resolve(10)
//     },2000)
// }).then(result => {
//     console.log(result)
//     return new Promise(resolve => {
//         setTimeout(() => {
//             return resolve(result * 2)
//         },2000)
//     })
// }).then(result => {
//     console.log(result)
//     return new Promise(resolve => {
//         setTimeout(() => {
//             return resolve(result * 2)
//         },2000)
//     })
// }).then(data => {
//     console.log(data)
//     // asdasd; // Ошибка! catch() ловит ошибку 
//     return data
// }).catch(err => {
//     console.log(err.name)
// })

// setTimeout(() => console.log(promise),8000)

// // Запрашиваем user.json
// fetch('/article/promise-chaining/user.json')
//   // Загружаем данные в формате json
//   .then(response => response.json())
//   // Делаем запрос к GitHub
//   .then(user => fetch(`https://api.github.com/users/${user.name}`))
//   // Загружаем ответ в формате json
//   .then(response => response.json())
//   // Показываем аватар (githubUser.avatar_url) в течение 3 секунд (возможно, с анимацией)
//   .then(githubUser => {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout(() => img.remove(), 3000); // (*)
//   });



//   let result = new Promise(res => {
//     setTimeout(() => {
//         res(10)
//     },2000)
//   })
//   .then(res => {
//     return res * 2;
//   })
//   .then(res => {
//     console.log(res)
//     // mistake;
//     return res;
//   })
//   .catch(err => console.log(err))
//   .then(res => {
//     console.log(res + ': result done')
//     return res;
//   });

// new Promise(resolve => {
//     resolve(result)
// })
// .then(res => {
//     console.log(typeof res)
// })

// function delay(ms) {
//     return new Promise(res => setTimeout(() => res(),ms))
// }

// async function getData() {
//     try{
//         // await delay(2000);
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const data = await response.json();
//         return data;

//     } catch(e) {
//         console.log(e);
//     }
// }

// const data = getData()

// const blockPromise =  document.querySelector('.main__promise_block');


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


// async function getData() {
//     let json = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let data = await json.json();
//     console.log(data)
// }

// getData()
const urlUser1 = 'https://jsonplaceholder.typicode.com/users/1'
const urlUser2 = 'https://jsonplaceholder.typicode.com/users/2'
const urlUser3 = 'https://jsonplaceholder.typicode.com/users/3'
const urlUser4 = 'https://jsonplaceholder.typicode.com/users/4'
const urlUser5 = 'https://jsonplaceholder.typicode.com/users/5'
const urlUser6 = 'https://jsonplaceholder.typicode.com/users/6'
const urlUser7 = 'https://jsonplaceholder.typicode.com/users/7'
const urlUser8 = 'https://jsonplaceholder.typicode.com/users/8'
const mainContainer = document.querySelector('.main')
// const mainBlock = document.querySelector('.main');
// const divJs = document.querySelector('.js')

// function makeUser(user, userSelector) {
//     let userBlock = document.querySelector(userSelector);
//     userBlock.textContent = `Я ${user.id} посетитель сайта! Меня зовут ${user.name}! Я живу в ${user.address.city}! Мой email : ${user.email}`
// };

// function makeDynamicUser({name , email}) {
//     const div = document.createElement('div');
//     div.className = 'main__user2'
//     div.style.width = "6rem";
//     div.style.height = "100px";
//     div.innerHTML = "Hello";
//     mainBlock.insertAdjacentElement('afterbegin',div)
//     div.innerText = `Hi, my name is ${name}. Send me mail on ${email}`
// }

// async function loadJson(url) {
//     try {
//         const response = await fetch(url);
//         const data = await response.json()
//         console.log(data)
//         const user = '.main__promise_block'
//         makeUser(data, user)
//     } catch (e) {
//         console.log(e)
//     }
// }


// loadJson(url) // (3)


// async function getData() {
//     const response = await fetch(url2)
//     const data = await response.json()
//     makeDynamicUser(data)
// }

// getData()


async function getData(url) {
    try {
        const response = await fetch(url)
        const user = await response.json()
        console.log(user)
        renderUser(user)
    } catch (err) {
        console.log(err)
    }
}

function renderUser(user) {
    // const userContainer = document.querySelector('.main__user');
    const divUser = document.createElement('div');
    divUser.className = 'main__user';
    divUser.innerHTML = `User: ${user.name} <br> Company: ${user.company.name} <br> Address: ${user.address.city} <br> Email: ${user.email}`
    mainContainer.append(divUser)
}

getData(urlUser1)
getData(urlUser2)
getData(urlUser3)
getData(urlUser4)
getData(urlUser5)
getData(urlUser6)
getData(urlUser7)
getData(urlUser8)