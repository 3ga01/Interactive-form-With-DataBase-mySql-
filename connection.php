<?php

$dbhost = '127.0.0.1:3308';
$dbuser = 'root';
$dbpass = '';
$dbname = "login_sample_db";

if (!$con = mysqli_connect("127.0.0.1:3308", $dbuser, $dbpass, $dbname)){

  die("failed to connect to Database 
  ");
}


?>