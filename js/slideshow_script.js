let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Function to show the current slide
function showSlide(index) {
  // Hide all slides
  slides.forEach((slide) => slide.classList.remove('active'));

  // Show the slide at the given index
  slides[index].classList.add('active');
}

// Move to the next slide
function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
  showSlide(currentSlideIndex);
}

// Move to the previous slide
function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentSlideIndex);
}

// Initially show the first slide
showSlide(currentSlideIndex);

// Set up event listeners for next and prev buttons
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);