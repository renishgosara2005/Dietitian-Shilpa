window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "0";  
  }
} 


// let currentSlide = 0;

// function changeSlide(direction) {
//     const slides = document.querySelectorAll('.slide');
//     const totalSlides = slides.length;

//     currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
//     const slideWidth = slides[0].clientWidth;

//     document.querySelector('.slides').style.transform = `translateX(${-currentSlide * slideWidth}px)`;
// }


let currentSlide = 0;
let autoSlideInterval;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const slideWidth = slides[0].clientWidth;

    document.querySelector('.slides').style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 3000); // Change slide every 3 seconds
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Start auto sliding when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
    startAutoSlide();

    // Optionally, stop auto sliding when user interacts with the slider
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
});
