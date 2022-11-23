var pass = document.getElementById("pass")
var user = document.getElementById("username");
var error_msg = document.getElementById("error-msg");
var regex = /^([A-Z a-z])\w+/g;//rgular expression to makke sure username is valid
var isExisting = regex.test(user);


function validate(){

return user_validate();



}

function regVal(){

}

function user_validate(){
  if (user.value < 5 ||  !isExisting){
    alert("error");
    return false;
  }
  


else 
return true;  

}