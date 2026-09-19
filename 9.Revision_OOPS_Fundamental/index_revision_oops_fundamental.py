class User:
    def __init__(self,name,age):
        self.name = name
        self.age = age

    def greet(self):
        print("Hello, I am " + self.name)

    def show_age(self):
        print("My age is " + self.age)

user = User("John", 25)
user.greet();
user.show_age()