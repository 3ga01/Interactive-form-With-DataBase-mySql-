<?php
session_start();

include("connection.php");
include("functions.php"); 

// $user_data = check_login($con);

if ($_SERVER['REQUEST_METHOD'] == "POST"){
   
  //SOMETHING WAS POSTED
  $user_name = $_POST['user_name'];
  $password = $_POST['password'];

  if(!empty($user_name) && !empty($password) && !is_numeric($user_name)){


    $user_id = random_num(20);

    $query = "insert into users (user_id, user_name, password) values ('$user_id', '$user_name', '$password')";

    mysqli_query($con, $query);
    
    header("Location: login.php");
    die;

  }
  else
  {
    echo "Please enter some valid information";
  }
  
}
?> 


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="./style.css" />

    <title>Sign up</title>
  </head>
  <body>
    
    <div class="form-container">
      <form  id="login-form" method="post">
        <div class="form-content">
          <h2 class="form-header-text">Sign up</h2>

          <input
            autofocus
            required
            type="text"
            placeholder="Username"
            id="username"
            name="user_name"
          /><br />

          <input
            required
            type="email"
            placeholder="email address"
            id="email"
          /><br />

          <input
            required
            type="password"
            placeholder="password "
            id="pass"
            name = "password"
          /><br />

          <input
            required
            type="password"
            placeholder="confirm password"
            id="vPass"
          /><br /><br />

          <button type="submit" id="button">continue</button>
          <br />

          <a href="login.php">Already have an account? sign in</a><br />
        </div>

      </form>
    </div>
        <script src="./main.js"></script>
  </body>
</html>
