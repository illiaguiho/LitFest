let resgistrationForm = document.getElementById('registration-form');
let signInForm = document.getElementById('sign-in-form');
let signInLink = document.getElementById('sign-in-link');
let registerLink = document.getElementById('register-link');


signInLink.addEventListener('click', function(){
  if(signInForm.style.display = "none"){
    signInForm.style.display = "block";
    resgistrationForm.style.display = "none";
  }
});

registerLink.addEventListener('click', function(){
  if(signInForm.style.display != "none"){
    signInForm.style.display = "none";
    resgistrationForm.style.display = "block";
  }
}); // cheh
