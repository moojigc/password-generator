// Assignment Code
var generateBtn = document.querySelector("#generate");

// global variables
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var lowercaseLetters = alphabet.split("");
var uppercaseLetters = alphabet.toUpperCase().split("");
var generateButton = document.getElementById("generate-button");

// Stores user choices and sets defaults
var userCase = false;
var userNumbers = false;
var userSpecial = false;

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// Displays password options
function displayOptions() {
	document.getElementById("password-options").style.display = "block";
	document.getElementById("begin-button").style.display = "none";
	generateButton.style.display = "block";
	document.getElementById("password").innerHTML = "Your password will appear here."
};

// Saves user password length
function chooseLength() {
	passwordLength = document.getElementById("password-length").value;
	if (passwordLength >= 8 && passwordLength <= 128) {
		document.getElementById("password-length").style.backgroundColor="lightgreen";
		passwordLength = document.getElementById("password-length").value;
	} else {
		document.getElementById("password-length").style.backgroundColor="pink";
		alert("Password length must be between 8 and 128.");
		passwordLength = undefined;
	}
}


// Adds uppercase 
function chooseCase() {	
	var yesUppercase = document.getElementById("yes-uppercase");
	document.getElementById("case-toggle").style.display = "none";
	yesUppercase.style.display = "block";
};
// Changes choice if user changes mind
function unChooseCase() {
	var yesCase = document.getElementById("yes-uppercase");
	var noCase = document.getElementById("no-uppercase");

if (yesCase.style.display === "block") {
		noCase.style.display = "block";
		yesCase.style.display = "none";
		userCase = false;
	} else {
		yesCase.style.display = "block";
		noCase.style.display = "none";
		userCase = true;
	}; 
};


// Adds numbers
function chooseNumbers() {	
	var yesNumbers = document.getElementById("yes-numbers");
	document.getElementById("numbers-toggle").style.display = "none";
	yesNumbers.style.display = "block";
};
// Changes choice if user changes mind
function unChooseNumbers() {
	var yesNumbers = document.getElementById("yes-numbers");
	var noNumbers = document.getElementById("no-numbers");

	if (yesNumbers.style.display === "block") {
		noNumbers.style.display = "block";
		yesNumbers.style.display = "none";
		userNumbers = false;
	} else {
		yesNumbers.style.display = "block";
		noNumbers.style.display = "none";
		userNumbers = true;
	}; 
};

// Adds special characters
function chooseSpecial() {	
	var yesSpecial = document.getElementById("yes-special");
	document.getElementById("special-toggle").style.display = "none";
	yesSpecial.style.display = "block";
};
// Changes choice if user changes mind
function unChooseSpecial() {
	var yesSpecial = document.getElementById("yes-special");
	var noSpecial = document.getElementById("no-special");

	if (yesSpecial.style.display === "block") {
		noSpecial.style.display = "block";
		yesSpecial.style.display = "none";
		userSpecial = false;
	} else {
		yesSpecial.style.display = "block";
		noSpecial.style.display = "none";
		userSpecial = true;
	}; 
};

// Write password to the #password input
function writePassword() {
	var newPassword = document.getElementById("password");
	newPassword.innerHTML = 
}

