"use strict";
const nextSlide = document.getElementById('next-btn');
const prevSlide = document.getElementById('prev-btn');

// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

let currentSlide = 0;
let maxSlide = slides.length - 1;

// NEXT SLIDE
nextSlide.addEventListener('click', () => {
    console.log('next-button-clicked');
    if (currentSlide === maxSlide) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
    });
});

// PREVIOUS SLIDE
prevSlide.addEventListener('click', () => {
    console.log('previous-button-clicked');
    if (currentSlide === 0) {
        currentSlide = maxSlide;
    } else {
        currentSlide--;
    }


    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
      });
    });
    