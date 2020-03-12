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
	document.getElementById("password").innerHTML = "あなたのパスワードがここに発表します。"
};

document.getElementById("begin-button").addEventListener("click", displayOptions);

var lengthInputField = document.getElementById("password-length");
// Saves user password length. Also includes validation and runs an error msg for invalid values
function chooseLength() {
	var errorMessage = document.createElement("smalltext");
	errorMessage.setAttribute("id", "invalid-length-msg");
	errorMessage.setAttribute("class", "row");
	errorMessage.style.color = "red";
	errorMessage.style.marginTop = ".5rem";
	passwordLength = document.getElementById("password-length").value;
	confirmBtn = document.getElementById("length-button");

	if (passwordLength >= 8 && passwordLength <= 128) {
		lengthInputField.style.borderColor = "lightgreen";
		lengthInputField.style.boxShadow = "0 0 0 0.2rem lightgreen";
		passwordLength = document.getElementById("password-length").value;
		if (document.getElementById("invalid-length-msg") == lengthInputField.parentElement.childNodes[5]) {
			document.getElementById("invalid-length-msg").remove();
		}
		
	} else {
		lengthInputField.style.borderColor = "pink";
		lengthInputField.style.boxShadow = "0 0 0 0.2rem pink";
		// This if statement prevents error message from repeating
		if (document.getElementById("length-button") == lengthInputField.parentElement.childNodes[5]) {
			errorMessage.innerHTML = "Please enter a valid number from 8 to 128."
			lengthInputField.parentElement.insertBefore(errorMessage, lengthInputField.parentElement.childNodes[5]);
			confirmBtn.setAttribute("class", "row btn btn-primary");
		}
	}
}

lengthInputField.addEventListener("change", chooseLength);


// Clears password length field color when user clicks into field. doesn't work though (; ･`д･´)
function clearLengthField() {
	document.getElementById("password-length").style.boxShadow = "unset";
	document.getElementById("password-length").style.border = "1px solid #ced4da";
	document.getElementById("password-length").style.borderRadius = ".25rem";
}
lengthInputField.addEventListener("click", clearLengthField);


var yesCase = document.getElementById("yes-uppercase");
var noCase = document.getElementById("no-uppercase");
// Adds uppercase 
function chooseCase() {	
	this.style.display = "none";
	yesCase.style.display = "block";
	userCase = true;
};
// Changes choice if user changes mind
function unChooseCase() {
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

// Event listeners
document.getElementById("case-toggle").addEventListener("click", chooseCase);
yesCase.addEventListener("click", unChooseCase);
noCase.addEventListener("click", unChooseCase);


// Creates Yes and No buttons (can't get code to work using these yet)
// var yesButton = document.createElement("button");
// yesButton.setAttribute("class", "btn btn-block btn-success");
// yesButton.innerHTML = "Yes";

// var noButton = document.createElement("button");
// noButton.setAttribute("class", "btn btn-block btn-outline-danger");
// noButton.innerHTML = "No";


var yesNumbers = document.getElementById("yes-numbers");
var noNumbers = document.getElementById("no-numbers");
// Adds numbers
function chooseNumbers() {
	this.style.display = "none";
	yesNumbers.style.display = "block";
	userNumbers = true;
};
var numbersToggle = document.getElementById("numbers-toggle");
numbersToggle.addEventListener("click", chooseNumbers);

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

// Event listeners
numbersToggle.addEventListener("click", chooseNumbers);
yesNumbers.addEventListener("click", unChooseNumbers);
noNumbers.addEventListener("click", unChooseNumbers);


var yesSpecial = document.getElementById("yes-special");
var noSpecial = document.getElementById("no-special");
// Adds special characters
function chooseSpecial() {	
	this.style.display = "none";
	yesSpecial.style.display = "block";
	userSpecial = true;
};
// Changes choice if user changes mind
function unChooseSpecial() {
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

// Event listeners
document.getElementById("special-toggle").addEventListener("click", chooseSpecial);
yesSpecial.addEventListener("click", unChooseSpecial);
noSpecial.addEventListener("click", unChooseSpecial);

// Returns random number between 0 and y when x=1.
function randomN(x,y) { 
	return Math.floor(Math.random(x)*y);
}
generatedArray=[];

var newPasswordField = document.getElementById("password");
// Write password to the #password textarea	
function writePassword() {
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
				document.querySelector("#copy-button").style.display = "block";
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
			document.querySelector("#copy-button").style.display = "block";
		}
	} else {
		alert("Please enter valid password length and click 'Confirm.'");
	}
	if (generatedArray.length < 101) {
		generatedArray.push(newPasswordString);
		console.log(generatedArray);
	}
	
}

// Copy to clipboard
function copyText() {
	newPasswordField.select();
	newPasswordField.setSelectionRange(0, 99999)
	document.execCommand("copy");	
}
document.getElementById("copy-button").addEventListener("click", copyText);

// EventListeners
generateButton.addEventListener("click", writePassword);
document.querySelector("#password-length").addEventListener("click", clearLengthField);
document.querySelector("#length-button").addEventListener("click", chooseLength);
