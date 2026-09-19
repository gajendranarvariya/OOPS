# OOPS - Object-Oriented Programming

What will we cover this topic:

### 1. OOP Fandamentals

- What is OOP?
- Why OOP?
- Procedural vs Object-Oriented Programming
- Class
- Object
- Properties / Attributes
- Methods
- Constructor
- Destructor / finalization concepts
- `this` / `self` / `this`
- `call()` / `apply()` / `bind()`

### 2. Access Modifiers

- Public
- Private
- Protected
- Package/default access where applicable
- Getter and Setter

### 3. Four Pillars of OOPS

- Encapsulation
- Inheritance
- Polymorphism
- Abstraction

Example:

    Bank Account
    E-commerce
    Payment System
    Employee Management
    Vehicle System
    Food Delivery

### 4. Inheritance

- Parent/Base class
- Child/Derived class
- Single Inheritance
- Multilevel Inheritance
- Hierarchical Inheritance
- Multiple Inheritance
- Why some languages don`t support class-based multiple inheritance?
- Method Overriding
- Method Overloading
- `super`
- `final`

### 5. Polymorphism

- Compile-time polymorphism
- Runtime polymorphism
- Method Overloading
- Duck typing in Python
- Practical Payment example

### 6. Abstraction

- Abstract class
- Abstract method
- Why abstraction is useful
- Abstract class vs normal class
- Abstract class vs interface

### 7. Interfaces

Especially important for:

- Java
- PHP
  -JavaScript patterns
- Python protocols / abstract base classes

Example:

    PaymentGgateway
            |
    |-------|--------|
    UPI     Card    PayPal

### 8. Traits

Especially iimportant in PHP

- What is a trait?
- Why traits exist
- Trait vs class
- Trait vs interface
- Trait vs Inheritancec
- Multiple Trait
- Trait method conflicts
- `insteadof`
- `as`

Real-world example:

    Logger
    Timestamp
    Authentication
    Validation

### 9. Object Relationships

- Association
- Aggregation
- Composition
- Dependency
- "is-a" relationship
- "has-a" relationship
- "uses-a" relationship

Example:

    Car IS-A Vehicle
    Car HAS-A Engine
    Order HAS-A Customer
    Order USES-A PaymentSevice

### 10. Copying Objects

- Reference vs value (pass by reference and pass by value)
- Shallow copy
- Deep copy
- Nested Objects
- Mutable vs immutable data
- JavaScript object copying
- PHP cloning
- Java Object refernces
- Python copy
- Python deepcopy

### 11. More Important OOP Concepts

- Static properties
- Static methods
- Constants
- `this`
- `self`
- `parent`
- `super`
- Constructor chaining
- Method overriding
- Method overloading
- Dependency Injection
- Dependency Inversionn
- Composition over inheritance
- Coupling
- Cohesion
- Immutable Object
- Object-lifecycle
- SOLID Principles
- DRY
- KISS
- YAGNI
- Law of Demeter
- Design pattern

### 12. SOLID Principles

Very important for moving from beginner OOP -> professional OOP.

    S -> Single Responsibility Principle
    O -> Open/Closed Principle
    L -> Liskov Subsititution Principle
    I -> Interface Segregation Principle
    D -> Dependency Inversion Principle

### 13. Design Patterns

After understanding OOPS fundamentals:

- Factory
- Abstract Factory
- Singleton
- Builder
- Strategy
- Observer
- Adapter
- Decorator
- Repository
- Dependency Injection

### 14. Real-World Projects

1. Banking System
2. E-commerce System
3. Employee Management System
4. Library Management System
5. Food Delivery System
6. Payment System
7. Ride Booking System

### 15. Recap

1. What is OOPS?
2. Why do we use OOP?
3. Class
4. Object
5. Class vs Object
6. Properties and Methods
7. Constructor
8. Access Modifiers
9. Encapsulation
10. Inheritance
11. Polymorphism
12. Abstraction
13. Four Pillars of OOP
14. Interface
15. Tarit
16. Abstract Class
17. Interface vs Abstract Class
18. Trait VS Interface
19. Association
20. Aggregation
21. Composition
22. Dependency
23. Shallow Copy
24. Deep Copy
25. Static Members
26. Method Overloading
27. Method Overriding
28. Dependency Injection
29. Coupling
30. Cohesion
31. SOLID Principle
32. DRY / KISS / YAGNI
33. Composition Over Inheritance
34. Design patterns
35. Real-World Examples
36. OOPS Interview Questions
37. OOPS Cheat Sheet

---

## 1. OOP Fandamentals

#### 1. What is OOPS?

#### 2. Why OOPS?

#### 3. Procedural vs Object-Oriented Programming

---

### 4. Class

- A class is a blueprint/template for creating objects.
- Class = blueprint/template

Example:

**JavaScript**

```javascript
class User {}
```

**Java**

```java
class User {}
```

**PHP**

```php
class User {}
```

**Python**

```python
class User:
    pass
```

Class khud generally blueprint hai. actual data ke saath object banane par objecct create hota hai.

**Interview:** What is a class?<br>
**Answer 1:** A class defines the structure and behavior that objects created from it will have.<br>
**Answer 2:** A class is a blueprint/template for creating objects.

---

### 5. Object

- An object is an instance of a class.
- Object = class ka actual Instance
- Object = Instance of class

Example:

**JavaScript**

```javascript
// Class
class User {}

// Object
const user1 = new User();
const user2 = new User();
```

**Java**

```java
// Class
class User {}

// Object
User user1 = new User();
User user2 = new User();
```

**PHP**

```php
// Class
class User {}

// Object
$user1 = new User();
$user2 = new User();
```

**Python**

```python
# Class
class User:
    pass

# Object
user1 = User()
user2 = User()
```

**Question:** What is an Object?<br>
**Answer 1:** An Object is an instance of a class.<br>
**Answer 2:** An Object is a runtime instance containing data and behavior defined by a class.

---

### 6. Properties / Attributes

- Properties store an object data/state.
- Property = Object ka data/state

Maan lo User ke pass:

- name
- age
- email

hai.

Example:

**JavaScript**

```javascript
// Class
class User {
  // property
  name;
  age;
  email;
}

// Object
const user = new User();

// assign the value of property
user.name = "John";
user.age = 25;
user.email = "john@example.com";
```

    name  -> Property
    age   -> Property
    email -> Property

**Java**

```java
// Class
class User {
    String name;
    Int age;
    String email;
}

// Object
User user = new User();

// Assign the value of property
user.name = "John";
user.age = 25;
user.email = "John@gmail.com";
```

**PHP**

```php
// Class
class User {
    public $name;
    public $age;
    public $email;

    // ya
    // public string $name;
    // public int $age;
    // public string $email;

}

// Object
$user = new User();

// Assign the value of property
$user->name = "John";
$user->age = 25;
$user->email = "John@example.com";
```

**Python**

```python
# Class
class User:
    pass

# Object
user = User();
user.name = "John";
user.age = "John";
user.email = "John";
```

> Note: Python mein `properties` commonly instance attributes ke form mein create ki ja sakti hain.

Easy Definition

> Properties/attributes object ke andar data store karte hain.

**Interview Ask:**<br>
**Question:** What is a property?<br>
**Answer:** A property/attribute represents data or state belonging to an object.

---

### 7. Methods

- Methods are functions defined inside a class that describe behavior.
- Method = Object ka behavior/action

User kya kar sakta hai?

- greet
- login
- logout
- changePassword

Example:

JavaScript

```javascript
class User {
  name;
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const user = new User();
user.name = "John";
user.greet(); // Calling a method
```

Output:

    Hello John

> greet() - ek method hai

Java:

```java
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
```

**PHP:**

```php
class User {
    public $name;
    public function greet(){
        echo "Hello" .$this->name;
    }
}
// Object
$user = new User();
$user->name = "John";
$user->greet();
```

Python:

```python
class User:
    def greet(self):
        print("Hello "+ self.name);

# Object
user = User();
user.name = "John"; # Assign value in properties
user.greet(); # calling methods/function/action

```

Remember

    Property -> Data
    Method   -> Behavior

**Example:**

    User

    Properties:
        name
        age
        email

    Methods:
        login()
        logout()
        greet()

**Interview Ask:**<br>
**Question:** What is a method?<br>
**Answer 1:** A method is an operation/behavior that an object can perform.<br>
**Answer 2:** Methods are functions defined inside a class that describe behavior.

---

### 8. Constructor

- A constructor runs automatically when an object is created and commonly initializes properties.
- Constructor ka purpose hota hai object create hote waqt initial data set karna.

Without constructor:

```javascript
const user = new User();
user.name = "John";
user.age = 25;
```

With constructor:

```javascript
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const user = new User("John", 25);
user.greet();
```

Output:

    Hello John

Object create hote hi:

```javascript
new User("John", 25);
```

constructor automatically call hota hai.

Java:

```java
class User {
    String name;
    int age;
    User(String name, int age){
        this.name = name;
        this.age = age;
    }
    void greet(){
        System.out.println("Hello " + this.name)
    }
}

User user = new User("John", 25);
user.greet();

```

Java me constructor ka name `class` ke name par hota h

PHP:

```php
class User{
    public $name;
    public $age;
    public function __construct($name,$age){
        $this->name = name;
        $this->age = age;
    }
    public function greet(){
        echo "Hello ". $this->name
    }
}

$user = new User("John",25);
$user->greet();


// Another way
class User{
    public string $name;
    public int $age;
    public function __construct(string $name,int $age){
        $this->name = name;
        $this->age = age;
    }
    public function greet():void{
        echo "Hello ". $this->name
    }
}

$user = new User("John",25);
$user->greet();

```

PHP constructor:

    __construct()

Python:

```python
class User:
    def __init__(self,name,age):
        self.name = name;
        self.age = age;

    def greet(self):
        print("Hello "+self.name);

user = User("John", 25);
user.greet()
```

Python main:

    __init__()

initialization ke liye use hota hai

**Interview Ask:**<br>
**Question:** What is a constructor?<br>
**Answer 1:** A constructor runs automatically when an object is created and commonly initializes properties.<br>
**Answer 2:** Constructor ka purpose hota hai object create hote waqt initial data set karna.<br>

**Question:** What is a constructor used?<br>
**Answer 1:** To initialize a newly created object state.
**Answer 2:** To initialize a value of newly created object.

---
