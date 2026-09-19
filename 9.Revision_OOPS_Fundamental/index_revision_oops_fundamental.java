class User {
    String name;
    int age;

    User(String name, int age){
        this.name = name;
        this.age = age;
    }

    void greet(){
        System.out.println("Hello, I am "+this.name)
    }
    void showAge(){
        System.out.println("My age is "+this.age)
    }
}

User user = new User("John", 25);
user.greet()
user.showAge()

// ya -> main class ka use karke ise call kar sakte h

/* public class Main {
    public static void main(String[] args){
        User user = new User("John", 25);

        user.greet();
        user.showAge();
    }
} */