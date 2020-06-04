// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
/* Function to generate combination of password */
function generatePassword() {
    window.prompt(" How long do you want your password? Min. 8 Max 128 ")
    console.log(long);
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() *
            str.length + 1);

        pass += str.charAt(char)
    }

    return pass;
}



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);