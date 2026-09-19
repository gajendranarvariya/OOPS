<?php
class User {
    public string $name;
    public int $age;

    public function __construct(string $name, int $age){
        $this->name = $name;
        $this->age = $age;
    }

    public function greet():void{
        echo "Hello, I am ". $this->name. PHP_EOL;
    }
    public function showAge():void{
        echo "My age is ". $this->age. PHP_EOL;
    }
}

$user = new User("John", 25);
$user->greet();
$user->showAge();
?>