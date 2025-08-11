'use strict';
/**** Way 1: implementing prototype inheritance and delegation ****/
/**********************************************************/
/****** Constructor Functions and the new Operator *******/
/********************************************************/

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

/**********************************************/
/**************** Prototypes *****************/
/********************************************/
/*
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
*/

/***********************************************************/
/***** Prototypal Inheritance and The Prototype Chain *****/
/*********************************************************/
/*
console.log(Object);
console.log(Object.prototype);
console.log(Function.prototype);
console.log(Object.prototype.isPrototypeOf(Person.prototype)); //true
console.log(Person.__proto__ === Function.prototype); //true
console.log(Function.prototype.__proto__ === Object.prototype); //true
console.log(Object.prototype.__proto__ === null); //true
console.log(Person.prototype.__proto__ === Object.prototype); //true
console.log(neil.__proto__ === Person.prototype); //true
console.log(neil.__proto__ === Person); //false
console.log(neil.__proto__.constructor === Person); //true
console.log(neil);
console.log(neil.__proto__); //=Person.prototype
console.log(neil.__proto__.__proto__); //Object.prototype
console.log(neil.__proto__.__proto__.__proto__); //null
console.log(neil.__proto__.constructor);
console.dir(neil.__proto__.constructor);

const arr = [3, 4, 4, 5, 3, 6, 6, 7, 1]; //[] eta ar new Array 2ta e same. ai jnne new operator er kaj ta [] eta kre
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); //true
console.log(Array.prototype.__proto__ === Object.prototype); //true: Array is a special type of object
console.log(arr.__proto__.__proto__); //Object.prototype
console.log(arr.__proto__.__proto__.__proto__); //null

//creating new  array method (not a good idea)
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/

/**********************************************/
/**************** CHALLENGE #1 ****************/
/**********************************************/
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};
const car1 = new Car('BMW', 120);
console.log(car1);
const car2 = new Car('Mercedes', 95);
console.log(car2);

car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.brake();
car1.brake();
car1.brake();
car2.brake();
car2.brake();
car2.accelerate();
car2.accelerate();
*/
/*১. accelerate এবং brake methods কি করে?
accelerate method গাড়ির speed বাড়ায় (speed += 10)
brake method গাড়ির speed কমায় (speed -= 5)
অর্থাৎ, এই দুইটা method speed কে manipulate (পরিবর্তন) করতে পারে।
২. এই method গুলো কী?
এগুলো হলো গাড়ি object এর public interface।
মানে, বাইরের অন্য কোড শুধু এই method গুলোর মাধ্যমে গাড়ির speed নিয়ন্ত্রণ করতে পারবে।
৩. public interface মানে?
একদম বাইরের কোড গাড়ির speed প্রোপার্টিকে সরাসরি না ছুঁয়ে
শুধুমাত্র accelerate() বা brake() method ডেকে গাড়ির speed নিয়ন্ত্রণ করে।
এতে data encapsulation হয় — ডেটা সুরক্ষিত থাকে, শুধু নির্দিষ্ট ফাংশন দিয়েই পরিবর্তন হয়।
৪. কেন এটা দরকার?
সরাসরি car.speed = 1000 করলে গাড়ি হঠাৎ অনেক দ্রুত হতে পারে, যা বাস্তবিক নয়।
কিন্তু accelerate() method দিয়ে শুধু ধীরে ধীরে speed বাড়ানো হয়।
তাই বাইরের কোডকে নিয়ন্ত্রিত ও নিরাপদ ইন্টারফেস দেওয়ার জন্য method ব্যবহার করা হয়।
সংক্ষেপে:
accelerate আর brake method গাড়ির speed পরিবর্তন করে।
এগুলো গাড়ির বাইরের অংশের সাথে যোগাযোগের (public interface) দরজা।
অন্য code শুধু এই method গুলোর মাধ্যমে গাড়ির behavior নিয়ন্ত্রণ করে, সরাসরি speed না ছুঁয়ে। 
/////////////////////////////////////////////
তুমি ভাবো একটা খেলনা গাড়ি আছে, যার স্পীড (speed) নামের একটা মান আছে।

এখন তুমি সরাসরি গাড়ির স্পীডকে হাত দিয়ে বাড়াতে বা কমাতে পারো না।

তোমার কাছে গাড়ির সাথে কথা বলার জন্য দুইটা বোতাম আছে — একটা গাড়ি দ্রুত চালানোর জন্য (accelerate), আর একটা গাড়ি থামানোর জন্য (brake)।

বোঝার মতো কথা:
accelerate() = গাড়িকে দ্রুত করতে বোতাম

brake() = গাড়িকে ধীরে করতে বোতাম

তাই, বাইরের কেউ শুধু ওই বোতাম দুইটা ব্যবহার করবে, গাড়ির স্পীড নিজে থেকে সরাসরি বদলাতে পারবে না।
এটাকেই বলে — public interface (গাড়ির বাইরের সাথে কথা বলার নিয়ম)
আর স্পীডের মান গাড়ির ভিতরে লুকিয়ে রাখা, কেউ সরাসরি স্পর্শ করতে পারবে না — এটাকেই বলে encapsulation।

তোমার এই interface এর মাধ্যমে গাড়ি নিয়ন্ত্রণ করা হয়, ঠিক যেমন তোমার হাতে রিমোটের বোতাম আছে গাড়ি চালানোর জন্য।
*/

/**** Way 2: implementing prototype inheritance and delegation ****/
/**********************************************/
/**************** ES6 Classes ****************/
/**********************************************/
/*
//class expression
// const PersonCl = class{}
//class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //creating methods. these methods will be added to the prototype property of the personcl class which will be prototype of the obj created by the class
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`HEY! ${this.firstName}`);
  }
}

const mabiu = new PersonCl('Mabiu', 1992);
console.log(mabiu);
mabiu.calcAge();
console.log(mabiu.__proto__ === PersonCl.prototype); //true
console.log(mabiu.__proto__); //PersonCl.prototype
console.log(mabiu.__proto__.__proto__ === Object.prototype); //true //Object.prototype
console.log(mabiu.__proto__.__proto__.__proto__ === null); //true

//adding method manually
// PersonCl.prototype.greet = function () {
//   console.log(`HEY! ${this.firstName}`);
// };
mabiu.greet();
*/

/**********************************************/
/************ Setters and Getters *************/
/**********************************************/

// const account = {
//   owner: 'Neil',
//   movements: [200, 500, 700, 600, 100],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(move) {
//     this.movements.push(move);
//   },
// };
// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

//for class
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`HEY! ${this.firstName}`);
//   }
//   get age() {
//     return 2025 - this.birthYear;
//   }
// }
// const Shaqib = new PersonCl('shakib', 1992);
// console.log(Shaqib.age);
// console.log(Shaqib);

//creating a setter to check if it actually is a full anme
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`HEY! ${this.fullName}`);
//   }
//   get age() {
//     return 2025 - this.birthYear;
//   }

//   //set a property that already exist
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
// }
// const shaqib = new PersonCl('Shaqibul Islam', 1992);
// console.log(shaqib.age);
// console.log(shaqib);

// const walter = new PersonCl('Walter', 1965);

/**********************************************/
//এনক্যাপসুলেশন (Encapsulation) - প্রাইভেট প্রপার্টি এবং get/set
/**********************************************/
// class BankAccount {
//   #balance; // private field
//   constructor(initialBalance) {
//     this.#balance = initialBalance;
//   }
//   get balance() {
//     // সরাসরি #balance সরবরাহ না করে গেটার দিয়ে দেয়
//     return this.#balance;
//   }
//   deposit(amount) {
//     amount > 0 ? (this.#balance += amount) : 'Deposit amount must be positive!';
//   }
//   withdraw(amount) {
//     amount > 0 && amount <= this.#balance
//       ? (this.#balance -= amount)
//       : 'Invalid withdraw amount!';
//   }
// }
// const account1 = new BankAccount(1000);
// console.log(account1.balance);
// account1.deposit(500);
// console.log(account1.balance);
// account1.withdraw(50);
// console.log(account1.balance);
//console.log(account1.#balance); //error dibe
// #balance হলো private property, বাইরের কেউ সরাসরি অ্যাক্সেস করতে পারবে না।
// get balance() দিয়ে ব্যালেন্স দেখা যায়, কিন্তু পরিবর্তন করতে পারবে না সরাসরি।
// পরিবর্তনের জন্য deposit এবং withdraw মেথড দেয়া হয়েছে, যেখানে ভ্যালিডেশন করা হয়।
// এইভাবে ডাটা সেফ রাখা হয়, ভুল ব্যবহার কমে যায়।

/******************************************** */
//ডাটা রূপান্তর (Transformation) - Getter দিয়ে Age বের করা
/******************************************** */

// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   get age() {
//     return new Date().getFullYear() - this.birthYear;
//   }
// }
// const shakib = new Person('Shakib', 1992);
// console.log(shakib);
// console.log(shakib.age);

/****************Practice 1****************/
/* ১. Student Class
Instruction:
একটা Student ক্লাস বানাও।
প্রোপার্টি: firstName, lastName, marks (array)।
fullName নামে getter তৈরি করো যা পুরো নাম রিটার্ন করবে।
averageMark নামে getter তৈরি করো যা marks এর গড় (average) রিটার্ন করবে।
fullName নামে setter তৈরি করো, যা fullname দিয়ে firstName আর lastName আলাদা করবে। */
/*
class Student {
  constructor(firstName, lastName, marks) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.marks = marks;
  }
  // fullName getter - firstName + lastName combine kore full name dibe
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  // fullName setter - fullname input nibe, space diye split kore firstName ar lastName alada korbe
  set fullName(name) {
    const parts = name.split(' ');
    this.firstName = parts[0] || '';
    this.lastName = parts.slice(-1).join(' ') || '';
  }
  // averageMark getter - marks array er average calculate kore dibe
  get averageMark() {
    if (!this.marks.length) return 0;
    const sum = this.marks.reduce((accu, curr) => accu + curr, 0);
    return sum / this.marks.length;
  }
}
const neil = new Student('Neil', 'Juneja', [95, 96, 97]);
console.log(neil);
console.log(neil.averageMark);
console.log(neil.fullName);
console.log(neil.firstName);
console.log(neil.lastName);
*/

/****************Practice 2****************/
/*২. BankAccount Class
Instruction:
একটা BankAccount ক্লাস বানাও।
প্রোপার্টি: accountNumber, #balance (প্রাইভেট)।
balance নামে getter দাও যা #balance রিটার্ন করবে।
deposit(amount) মেথড তৈরি করো যা #balance বাড়াবে (শুধুমাত্র পজিটিভ মান)।
withdraw(amount) মেথড তৈরি করো যা #balance কমাবে যদি যথেষ্ট ব্যালেন্স থাকে।*/
/*
class BankAccount {
  #balance;
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.#balance = balance;
  }
  get balance() {
    return this.#balance;
  }
  deposit(amount) {
    if (amount > 0) return (this.#balance += amount);
    else return `Invalid`;
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) return (this.#balance -= amount);
    else return `Invalid`;
  }
}
const acc = new BankAccount('Shakib', 5000);
console.log(acc);
console.log(acc.balance);
console.log(acc.deposit(100));
console.log(acc.deposit(-100));
console.log(acc.withdraw(100000));
*/

/****************Practice 3****************/
/*৩. Rectangle Class
Instruction:
একটা Rectangle ক্লাস বানাও।
প্রোপার্টি: width, height।
area নামে getter দাও যা আয়তক্ষেত্রের এলাকা রিটার্ন করবে।
perimeter নামে getter দাও যা পেরিমিটার রিটার্ন করবে।
width এবং height এর জন্য setter দাও যাতে নেগেটিভ ভ্যালু সেট করলে alert দেখায়।*/
/*
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get area() {
    return this.width * this.height;
  }
  get perimeter() {
    return 2 * (this.width + this.height);
  }
  set height(value) {
    if (value > 0) this._height = value;
    else {
      alert(`Negative`);
      this._height = 1;
    }
  }
  get height() {
    return this._height;
  }
  set width(value) {
    if (value > 0) this._width = value;
    else {
      alert(`Negative`);
      this._width = 1;
    }
  }
  get width() {
    return this._width;
  }
}
const land = new Rectangle(10, -5);
console.log(land);
console.log(land.area);
console.log(land.perimeter);
land.height = 4;
console.log(land.height);
*/

/****************Practice 4****************/
/*৪. Temperature Class
Instruction:
একটা Temperature ক্লাস বানাও।
প্রোপার্টি: celsius (প্রাইভেট)।
fahrenheit নামে getter/setter দাও।
fahrenheit getter হবে celsius থেকে ফারেনহাইট কনভার্সন।
fahrenheit setter হবে ফারেনহাইট থেকে celsius সেট করবে।*/
/*
class Temperature {
  #celsius;
  constructor(celcius) {
    this.#celsius = celcius;
  }
  // Getter: Celsius → Fahrenheit
  get fahrenheit() {
    return this.#celsius * (9 / 5) + 32;
  }
  // Setter: Fahrenheit → Celsius
  set fahrenheit(f) {
    this.#celsius = (f - 32) * (5 / 9);
  }
}
const dhaka = new Temperature(50);
console.log(dhaka);
console.log(dhaka.fahrenheit);
dhaka.fahrenheit = 100;
console.log(dhaka.fahrenheit);
console.log(dhaka);
*/

/****************Practice 5****************/
/*৫. User Class
Instruction:
একটা User ক্লাস বানাও।
প্রোপার্টি: _password (প্রাইভেট)।
password নামে setter দাও যা ৮ অক্ষরের কম হলে alert দিবে।
password নামে getter দাও যা শুধু ****** রিটার্ন করবে (হ্যাকিং থেকে রক্ষা করতে)।*/

/*
class User {
  #password; //private property
  constructor(password) {
    if (String(password).length >= 8) this.#password = String(password);
    else {
      alert('Please enter atleast 8 character');
      this.#password = ''; //default empty if invalid
    }
  }
  set password(newPassword) {
    if (String(newPassword).length >= 8) this.#password = String(newPassword);
    else {
      alert('Please enter atleast 8 character');
    }
  }
  get password() {
    //return masked password

    return '*'.repeat(this.#password.length);
  }
}
const shakib = new User(123456789);
console.log(shakib.password);
shakib.password = 'stringfdg';
console.log(shakib.password);
shakib.password = 5555124454;
console.log(shakib.password);
console.log(shakib);
*/

/****************Practice 6****************/
/*
৬. Car Class
Instruction:
প্রোপার্টি: brand, model, year।
age নামে getter তৈরি করো যা বর্তমান বছর থেকে গাড়ির বয়স বের করবে।
model এর জন্য setter দাও, যা খালি স্ট্রিং হলে alert দিবে।
*/

/****************Practice 7****************/
/*
৭. ShoppingCart Class
Instruction:
প্রোপার্টি: items (array of objects { name, price })।
total নামে getter তৈরি করো যা সব আইটেমের প্রাইস যোগ করবে।
addItem(item) মেথড যা নতুন আইটেম যোগ করবে।
*/

/****************Practice 8****************/
/*
৮. Movie Class
Instruction:
প্রোপার্টি: title, rating (০ থেকে ১০ এর মধ্যে)।
rating এর জন্য setter দাও যাতে ০–১০ এর বাইরে হলে alert দেয়।
rating getter শুধু "Rating: X/10" ফরম্যাটে রিটার্ন করবে।
*/

/****************Practice 9****************/
/*
৯. Book Class
Instruction:
প্রোপার্টি: title, author, pagesRead, totalPages।
progress নামে getter যা রিটার্ন করবে "X% read"।
pagesRead এর জন্য setter যাতে টোটাল পেজের বেশি হলে alert দেয়।
*/

/****************Practice 10****************/
/*
১০. BankLoan Class
Instruction:
প্রোপার্টি: loanAmount, interestRate (%), years।
totalPayable নামে getter দাও যা simple interest অনুযায়ী মোট পেমেন্ট বের করবে।
interestRate এর জন্য setter দাও যাতে নেগেটিভ ভ্যালু হলে alert দেয়।
*/

/**********************************************/
/************** Static Methods ***************/
/********************************************/
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   //instance method
//   //methods will be added to the prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`HEY! ${this.firstName}`);
//   }
//   get age() {
//     return 2025 - this.birthYear;
//   }
//   //static method: methods will not be added to the prototype property
//   static hey() {
//     console.log(`Hey There`);
//     console.log(this); //entire constructor function
//   }
// }
// const Shaqib = new PersonCl('shakib', 1992);
// console.log(Shaqib.age);
// console.log(Shaqib);
// console.log(PersonCl);
// PersonCl.hey();

//if used in
// const Person = function (firstName, birthYear) {
//   this.birthYear = birthYear;
//   this.firstName = firstName;
// };
// const neil = new Person('Neil', 1992);
// console.log(neil);
// //static method
// Person.hey = function () {
//   console.log(`Hey There`);
//   console.log(this); //entire constructor function
// };
// Person.hey(); //its on the constructor
//neil.hey(); //so neil wont inherit it

/**** Way 3: implementing prototype inheritance and delegation ****/

/**********************************************/
/************** Object.create ***************/
/********************************************/
