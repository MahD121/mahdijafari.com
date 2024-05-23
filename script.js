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

