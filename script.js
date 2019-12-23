var passwordLength = prompt ("How long would you like your password to be? Please enter a number.");
console.log(passwordLength)

function generate() 
  let complexity = console.log(passwordLength).value;
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()"
  let password = "";
 
 for var i = 0; i < complexity; i++){
     password = password + values.charAt(math.floor(Math.random() * Math.floor(values.length-1)))
    }
  document.getElementById("card-body").value=password;