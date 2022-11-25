var pass = document.getElementById("pass");
var user = document.getElementById("username");
var loginForm = document.getElementById("login-form");
var usernameError = document.getElementById("uName_error");
var inputBox = document.getElementById("username");

user.addEventListener("input", function (e) {
  var pattern =
    /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/;
  var currentValue = e.target.value;

  var valid = pattern.test(currentValue);
  if (!valid) {
    usernameError.style.display = "block";
    inputBox.style.border = "1px solid red";
  } else {
    usernameError.style.display = "none";
    inputBox.style.border = "1px solid green";
  }
});
