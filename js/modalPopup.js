const modal = document.getElementById('universalModal');
const modalBody = modal.querySelector('.modal-body');
const continueBtn = modal.querySelector('.continue');
const cancelBtn = modal.querySelector('.cancel');

let targetUrl = null;

document.querySelectorAll('.openModal').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    targetUrl = link.getAttribute('href');
    modalBody.innerHTML = `<h1>Open a new tab?</h1><p>${link.dataset.text}</p>`;
    modal.style.display = 'block';
  });
});

function closeModal() {
  modal.style.display = 'none';
}

cancelBtn.addEventListener('click', closeModal);
window.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

continueBtn.addEventListener('click', () => {
  if (targetUrl) {
    window.open(targetUrl, '_blank');
    closeModal();
  }
});
