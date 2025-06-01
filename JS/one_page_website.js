let slideIndex = 1;

// Open the modal
function openLightbox() {
  document.getElementById("lightboxModal").style.display = "block";
  showSlide(slideIndex);
}

// Close the modal
function closeLightbox() {
  document.getElementById("lightboxModal").style.display = "none";
}

// Next/previous controls
function changeSlide(n) {
  showSlide(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlide(slideIndex = n);
}

// Display the right slide
function showSlide(n) {
  let slides = document.getElementsByClassName("lightbox-slide");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show current slide
  slides[slideIndex - 1].style.display = "block";
}
