// Without Constructor
class User {
  name;
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const user = new User();
user.name = "John";
user.greet();

// With constructor
class User1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const user1 = new User1("John", 25);
user1.greet();
