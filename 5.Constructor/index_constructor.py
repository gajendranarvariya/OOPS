class User:
    def __init__(self,name,age):
        self.name = name
        self.age = age

    def greet(self):
        print("Hello "+self.name)

user = User("John", 25)
user.greet()