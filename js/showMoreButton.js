const showButton = document.getElementById('showButton');
const extraContent = document.getElementById('extraContent');

const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

const baseLabel = showButton.dataset.label;
showButton.textContent = (isTouch ? "TAP TO READ " : "CLICK TO READ ") + baseLabel;

showButton.addEventListener('click', () => {
  extraContent.classList.add('revealed');
  showButton.remove();
});