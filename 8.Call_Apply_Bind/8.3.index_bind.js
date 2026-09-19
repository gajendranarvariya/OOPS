const user = {
  name: "John",
};
function greet() {
  console.log("Hello " + this.name);
}
const greetUser = greet.bind(user);
greetUser();

// **********************************************************
// Another Example
function introduce(age, city) {
  console.log(this.name, age, city);
}
const user1 = {
  name: "John",
};
const introduceJohn = introduce.bind(user1, 25, "Raipur");
introduceJohn();
