/* 
Example of methods
- greet
- login
- logout
- changePassword
*/

// Class
class User {
  name;

  //   Normal Method
  greet() {
    console.log(`Hello ${this.name}`);
  }

  //   Fat Arrow method
  greet2 = () => {
    console.log(`Hello ${this.name}`);
  };
}

const user = new User();
user.name = "John";
user.greet(); // Calling a method
user.greet2();
