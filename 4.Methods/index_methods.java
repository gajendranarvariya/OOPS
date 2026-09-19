class User {
    String name;
    void greet(){
        System.out.println("Hello" + this.name);
    }
}
// Object
User user = new User();
user.name = "John";
user.greet();