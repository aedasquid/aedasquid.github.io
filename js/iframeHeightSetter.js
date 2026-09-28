const iframes = document.querySelectorAll('.video-frame');
const ratio = 9 / 16;

function resizeIframes() {
  iframes.forEach(iframe => {
    iframe.style.height = iframe.offsetWidth * ratio + 'px';
  });
}

resizeIframes();

window.addEventListener('resize', resizeIframes);