const track = document.querySelector('.slider-track');
const cards = Array.from(document.querySelectorAll('.slider-track .service-card'));
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
const dotsContainer = document.querySelector('.slider-dots');

if (track && cards.length && prevBtn && nextBtn && dotsContainer) {
  const getVisibleCards = () => (window.innerWidth <= 700 ? 1 : window.innerWidth <= 1100 ? 2 : 3);
  let currentIndex = 0;

  function getMaxIndex() {
    return Math.max(0, cards.length - getVisibleCards());
  }

  function updateSlider() {
    const gap = 20;
    const cardWidth = cards[0].offsetWidth + gap;
    const maxIndex = getMaxIndex();

    currentIndex = Math.min(currentIndex, maxIndex);
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    document.querySelectorAll('.slider-dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  function createDots() {
    dotsContainer.innerHTML = '';

    for (let i = 0; i <= getMaxIndex(); i += 1) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'slider-dot';
      dot.setAttribute('aria-label', `Go to service ${i + 1}`);

      dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
      });

      dotsContainer.appendChild(dot);
    }
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(0, currentIndex - 1);
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = Math.min(getMaxIndex(), currentIndex + 1);
    updateSlider();
  });

  window.addEventListener('resize', () => {
    createDots();
    updateSlider();
  });

  createDots();
  updateSlider();
}
