var pass = document.getElementById("pass");
var user = document.getElementById("username");
var loginForm = document.getElementById("login-form");
var usernameError = document.getElementById("uName_error");
// var inputBox = document.getElementById("username");

user.addEventListener("input", function (e) {
  var pattern =
    /^[a-zA-Z](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){2,18}[a-zA-Z0-9]$/;
  var currentValue = e.target.value;

  var valid = pattern.test(currentValue);
  if (!valid) {
    user.style.border = "1px solid red";
  } else {
    user.style.border = "1px solid green";
  }

  pass.addEventListener("input", function (e) {
    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    var currentValue = e.target.value;

    var valid = pattern.test(currentValue);
    if (!valid) {
      pass.style.border = "1px solid red";
    } else {
      pass.style.border = "1px solid green";
    }
  });
});
