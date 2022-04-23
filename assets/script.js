
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
    generatePassword();

}

function generatePassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
    
    for (var i = 0; i < passwordLength; i++) {
       var randomPassword = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomPassword, randomPassword +1);
      console.log(password);
    }
    var passwordText = document.getElementById("password");

    passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

