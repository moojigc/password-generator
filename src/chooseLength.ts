import Choices from './Choices';
import element from './element';
import textContent from './text.json';

const appendLiteral = (parent: HTMLElement, literal: string) => {
  const children = parent.innerHTML;
  return children + literal;
};

const errorMessage = (text: string) => `
  <small id="invalid-length-msg" class="row" style="color: red; margin-top: 0.5rem;">
    ${text}
  </small>
`;

/** Set password length. Also includes validation and runs an error msg for invalid values */
export default function chooseLength(
  userChoices: Choices,
  lang: 'en' | 'ja',
  event?: { target: HTMLInputElement }
) {
  console.log(event?.target)
  const lengthField =
    event.target || (element('password-length') as HTMLInputElement);

  lengthField.parentElement.innerHTML = appendLiteral(
    lengthField.parentElement,
    errorMessage(textContent.text[lang].invalidLength)
  );

  const passwordLength =
    parseInt(event.target.value) || parseInt(lengthField.value);
  const errorMsgRef = element('invalid-length-msg');
  const confirmBtn = element('length-button');

  if (passwordLength >= 8 && passwordLength <= 128) {
    errorMsgRef.style.display = 'none';
    lengthField.style.borderColor = 'lightgreen';
    lengthField.style.boxShadow = '0 0 0 0.2rem lightgreen';
    confirmBtn.classList.add('btn-primary');
    confirmBtn.removeAttribute('disabled');

    userChoices.passwordLength = passwordLength;
  } else {
    lengthField.style.borderColor = 'pink';
    lengthField.style.boxShadow = '0 0 0 0.2rem pink';
    errorMsgRef.style.display = 'none';
    confirmBtn.classList.replace('btn-primary', 'btn-disabled');
    confirmBtn.toggleAttribute('disabled');
  }
}
