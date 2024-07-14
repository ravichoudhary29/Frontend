// hasOwnProperty()
const person = {
  name: "Ravi",
  age: 30,
  address: "Bengaluru",
};

// console.log(person.hasOwnProperty("address"));
// console.log("age1" in person);

// for ... in loop

// for (const key in person) {
//   console.log(key, person[key]);
// }

// Object.key() and Object.value()
// console.log(Object.values(person));

//Object.enteries()
console.log(Object.entries(person));
