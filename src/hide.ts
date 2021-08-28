/**
 * Hide element, display alternate
 */
const hide = (hidden: HTMLElement, show: HTMLElement) => {
  hidden.style.display = 'none';
  show.style.display = 'block';
}

export default hide;