<?php
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
?> 