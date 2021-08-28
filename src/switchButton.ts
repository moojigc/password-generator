import hide from "./hide";

export default function switchButton({
	choiceBool,
	yesButton,
	noButton,
	toggleButton
}: {
	choiceBool: boolean;
	yesButton: HTMLElement;
	noButton: HTMLElement;
	toggleButton: HTMLElement;
}) {
	toggleButton.style.display = 'none';

  if (choiceBool) {
    hide(yesButton, noButton)
	} else {
    hide(noButton, yesButton);
  }
}