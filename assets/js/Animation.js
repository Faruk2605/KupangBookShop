/* 
animation slider
*/
let currentSlideIndex = 0;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

//show current slide
function showSlide(index) {
  const totalSlides = slides.children.length;
  if (index >= totalSlides) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = totalSlides - 1;
  } else {
    currentSlideIndex = index;
  }

  // slide picure
  slides.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

  // Update navigation dots
  dots.forEach((dot, i) => {
    dot.className = dot.className.replace(" active", "");
    if (i === currentSlideIndex) {
      dot.className += " active";
    }
  });
}

// Funtion for navigation arrow
function moveSlide(step) {
  showSlide(currentSlideIndex + step);
}

// Function for navigation dot
function currentSlide(index) {
  showSlide(index - 1);
}

// change picture in every 5s
setInterval(() => {
  moveSlide(1);
}, 5000);

// show the first slide/picture if the page reloded
showSlide(currentSlideIndex);

/*
Animation scroll
*/
const scrollContainer = document.querySelector(".horizontal-scroll");
const scrollLeftBtn = document.getElementById("scroll-left");
const scrollRightBtn = document.getElementById("scroll-right");

scrollLeftBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: -300,
    behavior: "smooth",
  });
});

scrollRightBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: 300,
    behavior: "smooth",
  });
});
