// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");
	var passwordLength = document.getElementById("password-length")

	passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
	var lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var firstCharacter = lowercase[Math.floor(Math.random()*26)];
	console.log(firstCharacter);
	document.getElementById("password").innerHTML += firstCharacter; 
};

function displayOptions() {
	document.getElementById("password-options").style.display = "block";
	document.getElementById("begin-button").style.display = "none";
	document.getElementById("generate-button").style.display = "block";
};

function chooseUppercase() {
	var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	var secondCharacter = uppercase[Math.floor(Math.random()*26)];
	document.getElementById("password").innerHTML += secondCharacter;
};



