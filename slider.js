let slideIndex = 0; // Initialize slide index to 0 for the first slide
showSlides(); // Call showSlides initially to display the first slide

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increment slideIndex and reset if it goes beyond the last slide
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; // Go back to the first slide
  }

  // Remove 'active' class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and mark the corresponding dot as active
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Call showSlides again after 3 seconds (3000 milliseconds) for automatic sliding
  setTimeout(showSlides, 3000);
}

// Manual navigation functions
function plusSlides(n) {
  clearTimeout(autoSlideTimeout); // Stop automatic sliding when manually navigating
  showManualSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(autoSlideTimeout); // Stop automatic sliding when manually navigating
  showManualSlides(slideIndex = n);
}

function showManualSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Restart automatic sliding after a delay
  autoSlideTimeout = setTimeout(showSlides, 5000); // Resume auto slide after 5 seconds
}

let autoSlideTimeout;
// Initial call to start the automatic slideshow
showSlides();