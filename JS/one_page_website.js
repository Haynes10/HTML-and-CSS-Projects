// JavaScript for Lightbox Gallery

let slideIndex = 1;

function openLightbox() {
  document.getElementById('lightboxModal').style.display = 'block';
  showSlides(slideIndex);
}

function closeLightbox() {
  document.getElementById('lightboxModal').style.display = 'none';
}

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName('lightbox-slide');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  // Show the current slide
  slides[slideIndex - 1].style.display = 'block';
}
