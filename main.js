var pass = document.getElementById("pass")
var user = document.getElementById("username");
var error_msg = document.getElementById("error-msg");


function validate(){

return user_validate();



}

function user_validate(){
  if (user.value < 5 || (/[0-9]/.test(user.value))){
    alert("error");
    return false;
  }
  


else 
return true;  

}