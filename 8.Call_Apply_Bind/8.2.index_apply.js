const user = {
  name: "John",
};
function introduce(age, city) {
  console.log(this.name, age, city);
}

introduce.call(user, 25, "Raipur"); // call pass argument individual
introduce.apply(user, [25, "Raipur"]); // apply pass argument as an array
