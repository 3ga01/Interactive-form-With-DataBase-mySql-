var pass = document.getElementById("pass");
var user = document.getElementById("username");
var email = document.getElementById("email");
var loginForm = document.getElementById("login-form");
var submit = document.getElementById("submit");
var vPass = document.getElementById("vPass");
var currentValue;
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
});

pass.addEventListener("input", function (e) {
  var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  currentValue = e.target.value;

  var valid = pattern.test(currentValue);
  if (!valid) {
    pass.style.border = "1px solid red";
  } else {
    pass.style.border = "1px solid green";
  }
});

vPass.addEventListener("input", function (e) {
  var newCurrentValue = e.target.value;
  if (newCurrentValue === currentValue) {
    vPass.style.border = "1px solid green";
  } else {
    vPass.style.border = "1px solid red";
  }
});

email.addEventListener("input", function (e) {
  var pattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  var currentValue = e.target.value;

  var valid = pattern.test(currentValue);

  if (!valid) {
    email.style.border = "1px solid red";
  } else {
    email.style.border = "1px solid green";
  }
});
