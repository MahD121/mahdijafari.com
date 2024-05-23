// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementsByClassName('close')[0];

document.querySelectorAll('.project-img').forEach(image => {
  image.addEventListener('click', function () {
    lightbox.style.display = 'block';
    lightboxImg.src = this.src;
  });
});

closeBtn.addEventListener('click', function () {
  lightbox.style.display = 'none';
});

window.addEventListener('click', function (e) {
  if (e.target == lightbox) {
    lightbox.style.display = 'none';
  }
});

// Fake close button behavior
const fakeCloseBtn = document.getElementById('fake-close-btn');
let isHovered = false;
const maxDistance = 100;

function getRandomPosition() {
  const offset = 20;
  const randomTop = Math.floor(Math.random() * (window.innerHeight - offset));
  const randomRight = Math.floor(Math.random() * (window.innerWidth - offset));
  return { top: randomTop, right: randomRight };
}

function moveButton() {
  const { top, right } = getRandomPosition();
  fakeCloseBtn.style.top = `${top}px`;
  fakeCloseBtn.style.right = `${right}px`;
}

function handleMouseMove(event) {
  const cursorX = event.clientX;
  const cursorY = event.clientY;
  const btnRect = fakeCloseBtn.getBoundingClientRect();
  const btnX = btnRect.left + btnRect.width / 2;
  const btnY = btnRect.top + btnRect.height / 2;
  const distance = Math.sqrt((cursorX - btnX) ** 2 + (cursorY - btnY) ** 2);

  if (distance < maxDistance) {
    moveButton();
  }
}

fakeCloseBtn.addEventListener('mouseover', () => {
  isHovered = true;
  setTimeout(() => {
    if (isHovered) {
      fakeCloseBtn.style.display = 'none';
    }
  }, 5000);
});

fakeCloseBtn.addEventListener('mouseout', () => {
  isHovered = false;
});

document.addEventListener('mousemove', handleMouseMove);
