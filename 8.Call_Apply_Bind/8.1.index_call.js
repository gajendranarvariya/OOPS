// Without Argument
const user1 = {
  name: "John",
};
const user2 = {
  name: "Alice",
};

function greet() {
  console.log("Hello " + this.name);
}

greet.call(user1);
greet.call(user2);

// *****************************************
// With Argument

function introduce(age, city) {
  console.log(this.name, age, city);
}

const user = {
  name: "John",
};

introduce.call(user, 25, "Raipur");
