<?php
class User{
    public $name;
    public $age;
    public function __construct($name,$age){
        $this->name = name;
        $this->age = age;
    }
    public function greet(){
        echo "Hello ". $this->name;
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
        echo "Hello ". $this->name;
    }
}

$user = new User("John",25);
$user->greet();


?>