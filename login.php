
<?php

session_start();

include("connection.php");
include("functions.php"); 

if ($_SERVER['REQUEST_METHOD'] == "POST"){
   
  //SOMETHING WAS POSTED
  $user_name = $_POST['user_name'];
  $password = $_POST['password'];

  if(!empty($user_name) && !empty($password) && !is_numeric($user_name)){


    // $user_id = random_num(20);

    $query = "select * from users where user_name = '$user_name' limit 1";

   $result =  mysqli_query($con, $query);

   if($result){

    if ($result && mysqli_num_rows($result) > 0){

      $user_data = mysqli_fetch_assoc($result);
      
      if($user_data['password'] === $password){

        $_SESSION['user_id'] = $user_data['user_id'];
        header("Location:index.php");
        die;
  
      }

    } 
   }
    
   echo "Wrong username or password";
  }
  }
  else
  {
    echo "Please enter some valid information";
  }



?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="./style.css" />

    <script src="main.js" type="text/javascrip"></script>

    <title>Login</title>
  </head>
  <body>
    <div class="form-container">
      <form  id="login-form" method="post">
        <div class="form-content">
          <h2 class="form-header-text">Login</h2>

          <input
            id="username"
            name="user_name"
            required
            autofocus
            type="text"
            placeholder="Username or email"
          /><br />

          <p id="uError">Username Error<p>


          <input
            id="pass"
            name="password"
            required
            type="password"
            placeholder="password"
            ;
          /><br /><br>

          <button type="submit" id="button">continue</button>
          <br />

          <a href="signUp.php">Forgot your password? </a>
          <br />
          <a href="signUp.php">Don't have an account? Create account</a>
        </div>
      </form>
    </div>

    <script src="./main.js"></script>
  </body>
</html>
