class User {
    String name;
  User(String name) {
    this.name = name;
  }
  void greet() {
    System.out.println(this.name);
  }
}

User user = new User("John");
user.greet();