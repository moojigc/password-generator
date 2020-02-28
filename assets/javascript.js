// global variables
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var lowercaseLetters = alphabet.split("");
var uppercaseLetters = alphabet.toUpperCase().split("");
var generateButton = document.getElementById("generate-button");

// Stores user choices and sets defaults
var userCase = false;
var userNumbers = false;
var userSpecial = false;
var passwordLength = undefined;


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

// Clears password length field color when user clicks into field. doesn't work though (; ･`д･´)
function clearLengthField() {
	var lengthFieldColor = document.getElementById("password-length").style.backgroundColor;
	if (lengthFieldColor !== "transparent") {
		lengthFieldColor = "unset";
	}
	console.log(lengthFieldColor); //Even though it doesn't work, console still returns 'transparent'... WHAT
}

// Adds uppercase 
function chooseCase() {	
	var yesUppercase = document.getElementById("yes-uppercase");
	document.getElementById("case-toggle").style.display = "none";
	yesUppercase.style.display = "block";
	userCase = true;
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
	userNumbers = true;
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
	userSpecial = true;
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

// Returns random number between 0 and y when x=1.
function randomN(x,y) { 
	return Math.floor(Math.random(x)*y);
}

// Write password to the #password textarea	
function writePassword() {
	var newPasswordField = document.getElementById("password");
	var specialChar = (",./!@#$%^&*~").split("");
	var password = []; // Empty array to hold the password before appending it to newPasswordField

	if (passwordLength >= 8 && passwordLength <= 128) {
		// this loop runs for the number that user entered
		for (i=0; i < (passwordLength); i++) {
			// Randomized non-numerical variables here
			var randomLetter = alphabet[randomN(1,26)];
			var randomLetterUp = alphabet[randomN(1,26)].toUpperCase();
			var randomSpecial = specialChar[randomN(1,12)];

			// All different randomized combinations. Lowercase letters always included to keep this simple
			var randomCharacterAll = (randomLetter + randomLetterUp + randomN(1,10) + randomSpecial);

			var randomNoNumbers = (randomLetter + randomLetterUp + randomSpecial);
			var randomNoUp = (randomLetter + randomSpecial + randomN(1,10));
			var randomNoSpecial = (randomLetter + randomLetterUp + randomN(1,10));

			var onlyRandomUp = (randomLetter + randomLetterUp);
			var onlyRandomNumbers = (randomLetter + randomN(1,10));
			var onlyRandomSpecial = (randomLetter + randomSpecial);
			
			if (userCase && userNumbers && userSpecial) {
				// Adds new random character to password[] array
				password.push(randomCharacterAll[randomN(1,4)]);

			} else if (userCase && userSpecial) {
				password.push(randomNoNumbers[randomN(1,3)]);

			} else if (userSpecial && userNumbers) {
				password.push(randomNoUp[randomN(1,3)]);

			} else if (userCase && userNumbers) {
				password.push(randomNoSpecial[randomN(1,3)]);

			} else if (userCase) {
				password.push(onlyRandomUp[randomN(1,2)]);

			} else if (userNumbers) {
				password.push(onlyRandomNumbers[randomN(1,2)]);

			} else if (userSpecial) {
				password.push(onlyRandomSpecial[randomN(1,2)]);
			}
			else {
				password.push(randomLetter);
			}
		}
		// end of for loop
		if (userSpecial === false && userCase === false && userNumbers === false && passwordLength < 10) {
			var insecurePasswordOkay = confirm("This password may not be secure. Are you sure you wish to proceed?");
			if (insecurePasswordOkay) {
				newPasswordField.style.fontFamily = "'consolas', sans-serif";
				newPasswordField.style.fontSize = "3rem";
				newPasswordField.style.backgroundColor = "lightgreen";
				newPasswordField.style.textAlign = "center";
				// newPasswordField.style.height = "6rem";
				var newPasswordString = password.join("");
				newPasswordField.innerHTML = newPasswordString;
			} else {
				alert("A longer password or more types of characters are recommended.")
			};		
		} else {
			newPasswordField.style.fontFamily = "'consolas', sans-serif";
			newPasswordField.style.fontSize = "3rem";
			newPasswordField.style.backgroundColor = "lightgreen";
			newPasswordField.style.textAlign = "center";
			// newPasswordField.style.height = "6rem";
			var newPasswordString = password.join("");
			newPasswordField.innerHTML = newPasswordString;
		}
	} else {
		alert("Please enter valid password length and click 'Confirm.'");
	}
	
}

