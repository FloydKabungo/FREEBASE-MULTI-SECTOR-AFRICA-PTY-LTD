const track = document.querySelector('.slider-track');
const cards = Array.from(document.querySelectorAll('.slider-track .service-card'));
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
const dotsContainer = document.querySelector('.slider-dots');
const visibleCards = 3;
const maxIndex = Math.max(0, cards.length - visibleCards);
let currentIndex = 0;

function updateSlider() {
  const cardWidth = cards[0].offsetWidth + 20;
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  document.querySelectorAll('.slider-dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

function createDots() {
  for (let i = 0; i <= maxIndex; i += 1) {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'slider-dot';
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
  currentIndex = Math.min(maxIndex, currentIndex + 1);
  updateSlider();
});

createDots();
updateSlider();
