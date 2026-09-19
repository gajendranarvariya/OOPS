const user = {
  name: "John",
};
function greet(message) {
  console.log(message + ", " + this.name);
}

// call
greet.call(user, "Hello"); // Execute now

// apply
greet.apply(user, ["Hello"]); // Execute now, arguments in an array

// bind
const newGreet = greet.bind(user, "Hello"); // Creates a new function, which executes later.
newGreet();
