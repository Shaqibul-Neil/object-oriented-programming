'use strict';

//Constructor Functions and the new Operator
/**********************************************/

//person hsse constructor function
// const Person = function (firstName, birthYear) {
//   //console.log(this);
//   this.birthYear = birthYear;
//   this.firstName = firstName; //firstName, birthyear eder instance properties bola jai cz they are available to all the instances that are created from this function

//   //nvr create a method inside a constructor function. karon amra jdi thousands of person obj crt kri ai constructor func die dn sob obj ai code carry krbe jta performance prb krte pare
//   // this.calcAge = function () {
//   //   //bad practice.
//   //   console.log(2025 - this.birthYear);
//   // };

//   //alternative:
//   //use prototype and prototype inheritance
// };
// const neil = new Person('Neil', 1992);
// console.log(neil);

// const masha = new Person('Masha', 2005);
// console.log(masha);

// const jack = new Person('Jack', 1995);
// console.log(jack);
// //neil ekhane constructor function er akta instance

// console.log(neil instanceof Person);
// console.log(neil.__proto__ === Person.prototype);
// //er mane hcche neil object er prototype chain e person.prototype ache.  অর্থাৎ neil object এর উপরে থাকা prototype হল Person.prototype তাই যদি আমরা Person.prototype এ কোনো method দেই, সেটা neil, masha, jack সব object automatically পেয়ে যাবে:

// const jay = {
//   firstName: 'Jay',
//   birthYear: 2004,
// };
// console.log(jay instanceof Person); //false cz jay is not created from person function

// const account = function (
//   owner,
//   movements,
//   interestRate,
//   pin,
//   movementsDates,
//   currency,
//   locale
// ) {
//   this.owner = owner;
//   this.movements = movements;
//   this.interestRate = interestRate; // %
//   this.pin = pin;

//   this.movementsDates = movementsDates;
//   this.currency = currency;
//   this.locale = locale;
// };

// let account1 = new account(
//   'Jonas Schmedtmann',
//   [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
//   1.2,
//   [
//     '2019-11-18T21:31:17.178Z',
//     '2019-12-23T07:42:02.383Z',
//     '2020-01-28T09:15:04.904Z',
//     '2020-04-01T10:17:24.185Z',
//     '2025-05-08T14:11:59.604Z',
//     '2025-06-18T17:01:17.194Z',
//     '2025-06-22T00:36:17.929Z',
//     '2025-06-23T00:51:36.790Z',
//   ],
//   'EUR',
//   'de-DE'
// );
// console.log(account1);

// const displayBalance = function (acc) {
//   acc.balance = acc.movements.reduce((accu, curr) => accu + curr, 0);
// };

// displayBalance(account1);
// console.log(account1);

//using prototype
// const personMethods = {
//   eat() {
//     console.log(`Eating`);
//   },
//   sleep() {
//     console.log('sleeping');
//   },
//   play() {
//     console.log(`Playing`);
//   },
// };
// const Person = function (name, age) {
//   //let person = {};
//   //let person = Object.create(personMethods);
//   //let person = Object.create(Person.prototype);
//   // console.log(person);
//   // person.name = name;
//   // person.age = age;
//   this.name = name;
//   this.age = age;
//   // person.eat = personMethods.eat;
//   // person.sleep = personMethods.sleep;
//   // person.play = personMethods.play;
//   //return person;
// };
// //constructor fun e method add
// Person.prototype = {
//   eat() {
//     console.log(`Eating`);
//   },
//   sleep() {
//     console.log('sleeping');
//   },
//   play() {
//     console.log(`Playing`);
//   },
// };
// // const neil = Person('Neil', 33);
// // const mabiu = Person('mabiu', 33);
// const neil = new Person('Neil', 33);
// const mabiu = new Person('mabiu', 33);
// console.log(neil);
// console.log(mabiu);
// neil.play();

//using class
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     console.log(`Eating`);
//   }
//   sleep() {
//     console.log('sleeping');
//   }
//   play() {
//     console.log(`Playing`);
//   }
// }
// const neil = new Person('Neil', 33);
// const mabiu = new Person('mabiu', 33);
// console.log(neil);
// console.log(mabiu);
// neil.play();

// const captain = {
//   name: 'Shaqib',
//   age: 36,
//   country: 'BD',
//   address: {
//     division: {
//       name: 'Dhaka',
//       district: {
//         name: 'Dhaka District',
//         upazila: {
//           name: 'Dhanmondi',
//           postCode: 1209,
//         },
//       },
//     },
//   },
// };

// console.log(captain);
// console.dir(captain);
// console.log(document.body); // visually shows HTML tag
// console.dir(document.body); // shows it as an object with properties and methods

//const player = Object.create(captain);
//console.log(player);
//console.log(player.name);

// const test = function () {};
// console.log(test);
// console.dir(test);
// console.log(test.prototype);

// let persons = new Array();
// console.log(Array);
// console.dir(Array);
// console.log(Array.prototype);

// const employees = {
//   name: 'shahin',
//   experience: 5,
//   starting: 20000,
//   increment: 5000,
// };
// const ab = new Object(employees); //নতুন object বানায় employees এর shallow copy দিয়ে
// console.log(ab);
// const keys = Object.create(employees); //নতুন খালি object বানায়, যার prototype হচ্ছে employees
// console.log(keys);

// const obj = {};
// console.log(Object.getPrototypeOf(obj));
// console.log(Object.getPrototypeOf(obj) === Object.prototype);

// const Person = function (name) {
//   //instance properties
//   this.name = name;
// };
// const p1 = new Person('neil');
// console.log(p1);
// console.log(Object.getPrototypeOf(Person));
// console.log(Object.getPrototypeOf(p1));
// console.log(Object.getPrototypeOf(p1) === Person.prototype);

//Prototypes
const Person = function (firstName, birthYear) {
  console.log(this);
  this.birthYear = birthYear;
  this.firstName = firstName;
};
const neil = new Person('Neil', 1992);
console.log(neil);

//creating method
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

neil.calcAge();
console.log(neil);
//neil obj doesnt have calcaAGe bt still can access calcAge bcz of prototypal inheritance
console.log(neil.__proto__); //neil obj er prototype hcche Person.prototype.
console.log(neil.__proto__ === Person.prototype); //neil obj er prototype hcche Person constructor function er prototype property

console.log(Person.__proto__); //Function.prototype
console.log(neil.__proto__); //Person.prototype
console.log(Person.prototype.isPrototypeOf(neil)); //this prototype is the prototype of linked objects
console.log(Person.prototype.isPrototypeOf(Person));

//setting the properties in property
Person.prototype.species = 'Homo sapiens';
console.log(neil);
console.log(neil.species);
console.log(neil.hasOwnProperty('firstName'));
console.log(neil.hasOwnProperty('species')); //false bcz its not really a property of neil. it simply has access to it bcz of prototype property of person
