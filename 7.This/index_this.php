<?php
class User {
    public $name;
  public function __construct($name) {
    $this->name = $name;
  }
  public function greet() {
    echo $this->name;
  }
}

$user = new User("John");
$user->greet();
?>