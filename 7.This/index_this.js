// Class
class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(this.name);
  }
}

const user = new User("John");
user.greet();

// *****************************************************************
// Global Object
console.log(this); // This this represent global object

// *****************************************************************
// Object
const obj = {
  name: "John",
  greet() {
    console.log(this.name); // obj
  },
};
// *****************************************************************
// Function
function test() {
  console.log(this);
}

// Other
function User(name) {
  this.name = name;
}
const user1 = new User("John");
// *****************************************************************

// Fat Arrow function
const obj1 = {
  name: "John",
  greet: () => console.log(this.name), // Error show, because fat arrow ka `this`  nhi h
};
// With an `arrow function`, `this` is inherited lexically from the surrounding scope; arrow function don`t create their own `this`.

// Also, `call()`, `apply()`, and `bind()` can control `this` for regular functions.
