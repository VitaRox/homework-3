/*
Homework 3:
- create a function that is going to have two private fields:
  * age
  * name
  * we should have getters and a constructor method that sets the age and name
  * bonus: after we set age and name, we should not be able to set age and name of the object again.
*/


// TIL: Please note, hash names can’t be created on object literals(JSON objects) and by adding a field or function on prototype.
// They cannot be created adhoc, like other fields.They need to be declared upfront, in a class.
// Source: https://javascript.plainenglish.io/private-members-in-javascript-classes-cb04944f1ae2

console.log(`Class person syntax: `);
// Newfangled class syntax for making private methods and fields:
class Human {
  #age
  #name;
  constructor(age, name) {
    this.#age = age;
    this.#name = name;
  }
  getAge() {
    return this.#age;
  };
  getName() {
    return this.#name;
  }
}

let Kimberly = new Human(11, "Kimberly");
console.log(`Direct access of age, name should fail: name ${Kimberly.name}, age ${Kimberly.age}`);
console.log(`However, using our getters should yield 11: ${Kimberly.getAge()} and "Kimberly": ${Kimberly.getName()}`);

// Add newlines for readability:
console.log(`\n * * * * * * * * * * * * \n`);

console.log(`function Person syntax: `);
function Person(age, name) {

  // Setters
  this.setAge = () => {
    this.age = age;
  }
  this.setName = () => {
    this.name = name;
  }
  // Getters
  this.getAge = () => { return age };
  this.getName = () => { return name };
}

// Test cases
let Jim = new Person(54, "Jim");
console.log(`Should be undefined: ${Jim.name}`); // should fail
console.log(`Should yield the name Jim: ${Jim.getName()}`); // should succeed at yielding "Jim"

Jim.name = "Bob"; // Attempt to rename "Jim" to "Bob"; this should fail, as shown in next line
console.log(`This should still say Jim: ${Jim.getName()}`);

// Ensure 'age' is also encapsulated
console.log(`Age should also be undefined: ${Jim.age}`);
console.log(`Should say age is 54: ${Jim.getAge()}`);

// Finally, ensure 'age' cannot also be updated directly:
Jim.age = 99;
console.log(`Jim should still be 54: ${Jim.getAge()}`);


// - create a class call Car that has mileage and name as its properties
// - create a subclass called Motorcycle that is a subclass of Car with an additional property called color
// Car class should be able to increase its mileage and have a setter that sets its name and a method to reset its mileage.
// - motorcyle class should be able to repaint itself.Through repainting, it should decrease its mileage to 0.
// Do not access.mileage directly and set it to 0 but instead use parent method to do that.
