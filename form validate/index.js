var Form = document.querySelector("form");
var SubmitBtn = document.querySelector("#submit")

Form.addEventListener("submit", (event) => {
   event.preventDefault();

   var name = document.getElementById("name").value;
   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;
   var confirmPassowrd = document.getElementById("confirmPassword").value;
   
   var country = document.getElementById("country").value;
   var age = document.getElementById("age").value;



});

SubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();

});

