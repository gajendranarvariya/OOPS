<?php
class User {
    public function __construct(){
        echo "Construct called";
    }

    public function __destruct(){
        echo "Destructor called\n";
    }
}

$user = new User();
?>