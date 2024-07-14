// Object Oriented Programming

// this keyword
// let duck = {
//   name: "Afloc",
//   noOfLegs: "2",
//   sayName: function () {
//     return `The name of the duck is ${this.name} with ${this.noOfLegs} legs.`;
//   },
// };

// console.log(duck.sayName());

// console.log("Hello");

// Constructor function
// function Bird() {
//   this.name = "Aflock";
//   this.color = "Black";
//   this.noOfLegs = 2;
// }

// let blueBird = new Bird();

// blueBird.noOfLegs = 5;
// console.log(blueBird);

// Constructor function accepting arguments

// function Bird(name, color) {
//   this.name = name;
//   this.color = color;
//   this.noOfLegs = 2;
// }

// let canary = {
//   name: "Canary",
//   color: "Rainbow",
//   noOfLegs: 4,
// };

// let blueBird = new Bird("Aflock", "blue");
// let greenBird = new Bird("Jack", "green");

// console.log(blueBird);
// console.log(greenBird);

// console.log(blueBird instanceof Bird);
// console.log(greenBird instanceof Bird);
// console.log(canary instanceof Bird);

// Own property (.hasOwnProperty())
// function Bird(name, color) {
//   this.name = name;
//   this.color = color;
// }

// Bird.prototype = {
//   noOfLegs: 2,
//   sayName: function () {
//     console.log("Nom Nom");
//   },
//   describe: function () {
//     console.log("My name is " + this.name);
//   },
// };
// let duck = new Bird("Aflock", "blue");
// let ownProps = [];
// let protoProps = [];

// for (const property in duck) {
//   if (duck.hasOwnProperty(property)) {
//     ownProps.push(property);
//   } else {
//     protoProps.push(property);
//   }
// }

// console.log(duck.constructor === Bird);
// console.log(duck.constructor);
// console.log(duck);

// adding whole object as prototype

// console.log(Bird.prototype.isPrototypeOf(duck));
