class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hello, I am " + this.name);
  }
  showAge() {
    console.log("My age is " + this.age);
  }
}

const user = new User("John", 25);
user.greet();
user.showAge();