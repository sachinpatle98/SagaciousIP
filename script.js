let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    const totalSlides = slides.length;
    currentSlide = (index + totalSlides) % totalSlides;
    document.querySelector('.slides').style.transform = `translateX(${-currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

setInterval(nextSlide, 3000); // Slide change every 3 seconds

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const testimonialsContainer = document.querySelector('.testimonials-container');
const cards = document.querySelectorAll('.testimonial-card');
let index = 0;

function showTestimonial() {
    const width = cards[0].offsetWidth + 20; // Including margin
    testimonialsContainer.style.transform = `translateX(${-index * width}px)`;
}

// Update the index and apply the sliding effect
prev.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : cards.length - 1; // Circular scrolling
    showTestimonial();
});

next.addEventListener('click', () => {
    index = (index < cards.length - 1) ? index + 1 : 0; // Circular scrolling
    showTestimonial();
});

