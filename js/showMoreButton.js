const showButton = document.getElementById('showButton');
const extraContent = document.getElementById('extraContent');

showButton.addEventListener('click', () => {
  extraContent.classList.add('revealed');
  showButton.remove();
});