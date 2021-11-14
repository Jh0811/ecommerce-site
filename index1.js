
  var login=document.getElementById("login");
  var register=document.getElementById("register");
  var indicator=document.getElementById("indicator");

function register(){
 register.style.transform = 'translateX(0px)';
 login.style.transform = 'translateX(0px)';
}

function login(){
 register.style.transform = 'translateX(600px)';
 login.style.transform = 'translateX(600px)';
}
