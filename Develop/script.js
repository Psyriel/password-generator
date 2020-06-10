// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
/* Function to generate combination of password */
function generatePassword() {
    var long = window.prompt(" How long do you want your password? Min. 8 Max 128 ");
    console.log(long);

    window.alert(' Do you want lowercase letters? ');

    window.alert(' Do you want uppercase letters? ');

    window.alert(' Do you want numbers? ');

    window.alert(' Do you want special charactors? ');


    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz' +
        '0123456789' +
        '`~!@#$%^&*()_-+=';

    for (i = 1; i <= long; i++) {
        var char = Math.floor(Math.random() *
            str.length + 1);

        pass += str.charAt(char);
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