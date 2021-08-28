import { filter } from 'minimatch';
import Choices from './Choices';
import element from './element';
import text from './text.json';

const random = (x: number) => Math.floor(Math.random() * x);
const { letters, uppercaseLetters, integers } = Choices;
const specialChars = Choices.special;

export default function generate(userChoices: Choices, lang: 'en' | 'ja') {

  const textContent = text.text[lang];

  const newPasswordField = element('password');
  const { passwordLength, uppercase, special, numbers } = userChoices;
  const passwordArray = [];

  // Check pass length
  if (userChoices.passwordLength >= 8 && userChoices.passwordLength <= 128) {
    // Run loop for chosen length
    for (let i = 0; i < passwordLength; i++) {
      const choices = {
        letter: letters[random(26)],
        uppercase: uppercaseLetters[random(10)],
        numbers: integers[random[10]],
        special: specialChars[random(12)],
      };
      /* Filter out what the user doesn't want */
      const filteredKeys = Object.keys(choices).filter((key) => {
        if (key === 'letter') {
          return true;
        } else {
          return userChoices[key];
        }
      });
      const randomIndex = random(filteredKeys.length)
      const randomKey = filteredKeys[randomIndex];
      console.log(choices.numbers);
      const randomChar = choices[randomKey]
      passwordArray.push(randomChar);
    }
    // end loop

    const password = passwordArray.join('');

    if (!special && !numbers && !uppercase && passwordLength <= 10) {
      const insecurePasswordOkay = confirm(
        textContent.insecureConfirmation
      );
      if (insecurePasswordOkay) {
        newPasswordField.style.fontFamily = "'consolas', sans-serif";
        newPasswordField.style.fontSize = '3rem';
        newPasswordField.style.backgroundColor = 'lightgreen';
        newPasswordField.style.textAlign = 'center';
        
        newPasswordField.innerText = password;
        element('copy-button').style.display = 'block';
      } else {
        alert(textContent.cancelAlert);
      }
    } else {
      newPasswordField.style.fontFamily = "'consolas', sans-serif";
      newPasswordField.style.fontSize = '3rem';
      newPasswordField.style.backgroundColor = 'lightgreen';
      newPasswordField.style.textAlign = 'center';

      newPasswordField.innerText = password;
      element('copy-button').style.display = 'block';
    }
  } else {
    alert(textContent.errorAlert);
  }
}
