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

// Returns random number between 0 and 9 when x=1.
function randomN(x) { 
	return Math.floor(Math.random(x)*10);
}

// Write password to the #password textarea
function writePassword() {
	var newPasswordField = document.getElementById("password");
	var specialChar = (",./!@#$%^&*~").split("");
	var password = []; // Empty array to hold the password before appending it to newPasswordField

	if (passwordLength < 8 || passwordLength > 128 || passwordLength === undefined) {
		alert("Please enter valid password length and click 'Confirm.'");
	} else {

		// this loop runs for the number that user entered
		for (i=0; i <= (passwordLength); i++) {
			// Randomized non-numerical variables here
			var randomLetter = alphabet[randomN(1)];
			var randomLetterUp = alphabet[randomN(1)].toUpperCase();
			var randomSpecial = specialChar[randomN(1)];
			var randomCharacter = (randomLetter + randomLetterUp + randomN(1) + randomSpecial);
			// console.log(randomCharacter);
			console.log("Random letter " + randomLetter);
			console.log("Random UP " + randomLetterUp);
			console.log("Random special " + randomSpecial);
			console.log("random number " + randomN(1));
			console.log(randomCharacter);
			console.log(randomCharacter[randomN(1)]);
	
			if (userCase && userNumbers && userSpecial) {
				console.log(randomCharacter[randomN(1)]);
				// Adds new random character to password[] array
				password.push(randomCharacter[randomN(1)]);
			} else {
				password.push(randomLetter);
			}
		}
		// end of for loop
		var newPasswordString = password.join("");
		newPasswordField.innerHTML = newPasswordString;
	}
	
}

