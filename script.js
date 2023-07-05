

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  // Get Password Length
  var length = prompt("Enter the desired password length (between 8 and 128 characters):");

  // Validating length
  if(length < 8 || length > 128){
    alertalert("Invalid password length! Please enter a value between 8 and 128.");
    generatePassword();
  }


  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate at least one character type is used
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type.");
    generatePassword();
  }

  // Defining Characters
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  // Creating a pool of selected characters
  var characters = "";
  if(includeLowercase){
    characters += lowercaseChars;
  }
  if(includeUppercase){
    characters += uppercaseChars;
  }
  if(includeNumeric){
    characters += numericChars;
  }
  if(includeSpecial){
    characters += specialChars;
  }

  var password = "";

  for(var i = 0; i < length; i++){
    var randomCharacter = Math.floor(Math.random() * characters.length)
    password = password + characters[randomCharacter];
  }

  return password;

}