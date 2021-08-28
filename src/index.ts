import Choices from './Choices';
import chooseLength from './chooseLength';
import element from './element';
import generate from './generate';
import hide from './hide';
import switchButton from './switchButton';
type Event<ElementType = HTMLInputElement> = { target: ElementType };

const userChoices = new Choices();
console.log(userChoices.props)
const lang = /ja/.test(window.location.pathname) ? 'ja' : 'en';

/* --- EVENT LISTENERS --- */
/** Renders the second page */
element('begin-button').addEventListener('click', () => {
  console.log('this works')
  hide(element('begin-button'), element('password-options'));
  element('generate-button').style.display = 'block';
  element('password')
    .setAttribute('placeholder', 'Your password will appear here.');
});

/** Change password length */
element('password-length').addEventListener('keydown', (event) => {
  console.log(event.target)
  chooseLength(userChoices, lang, (event as unknown) as Event);
});
element('length-button').addEventListener('click', () => {
  chooseLength(userChoices, lang, {
    target: element('password-length') as HTMLInputElement,
  });
});
element('password-length').addEventListener('click', (event) => {
  const { target } = (event as unknown) as Event;
  target.style.boxShadow = 'unset';
  target.style.border = '1px solid #ced4da';
  target.style.borderRadius = '.25rem';
});

const caseButtons = ['yes-uppercase', 'no-uppercase', 'toggle-uppercase'];
/** Switch upper/lowercase */
caseButtons.forEach((button) => {
  console.log(element(button))
  element(button)?.addEventListener('click', () => {
    switchButton({
      choiceBool: userChoices.uppercase,
      noButton: element('no-uppercase'),
      yesButton: element('yes-uppercase'),
      toggleButton: element('toggle-uppercase'),
    });
  });
});

const numbersButtons = ['yes-numbers', 'no-numbers', 'toggle-numbers'];
/** Switch include numbers */
numbersButtons.forEach((button) => {
  element(button).addEventListener('click', () => {
    userChoices.numbers = !userChoices.numbers;
    switchButton({
      choiceBool: userChoices.numbers,
      noButton: element('no-numbers'),
      yesButton: element('yes-numbers'),
      toggleButton: element('toggle-numbers'),
    });
  });
});

const specialButtons = ['yes-special', 'no-special', 'toggle-special'];
/** Switch include special characters */
specialButtons.forEach((button) => {
  element(button).addEventListener('click', () => {
    userChoices.special = !userChoices.special;
    switchButton({
      choiceBool: userChoices.special,
      noButton: element('no-special'),
      yesButton: element('yes-special'),
      toggleButton: element('toggle-special'),
    });
  });
});

element('generate-button').addEventListener('click', () => {
	generate(userChoices, lang);
})

/** Copy button */
element('copy-button').addEventListener('click', () => {
	const passwordDisplay = element('password');
	 // @ts-ignore
	 passwordDisplay.select();
	 // @ts-ignore
	 passwordDisplay.setSelectionRange(0, 99999);
	 document.execCommand('copy');
});
