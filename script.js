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

