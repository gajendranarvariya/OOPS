class User:
  def __init__(self,name):
    self.name = name

  def greet(self):
    print(self.name)

user = User("John")
user.greet()