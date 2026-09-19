class User {
    String name;
    Int age;
    User(String name, Int age){
        this.name = name;
        this.age = age;
    }
    void greet(){
        System.out.println("Hello " + this.name)
    }
}

User user = new User("John", 25);
user.greet();