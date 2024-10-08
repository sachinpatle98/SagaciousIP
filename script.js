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

setInterval(nextSlide, 4000); 


// const prev = document.getElementById('prev');
// const next = document.getElementById('next');
// const testimonialsContainer = document.querySelector('.testimonials-container');
// const cards = document.querySelectorAll('.testimonial-card');
// let index = 0;

// function showTestimonial() {
//     const width = cards[0].offsetWidth + 20;
//     testimonialsContainer.style.transform = `translateX(${-index * width}px)`;
// }

// prev.addEventListener('click', () => {
//     index = (index > 0) ? index - 1 : cards.length - 1; // Circular scrolling
//     showTestimonial();
// });

// next.addEventListener('click', () => {
//     index = (index < cards.length - 1) ? index + 1 : 0; // Circular scrolling
//     showTestimonial();
// });


document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active'); 
        hamburger.classList.toggle('is-active'); 
    });
});



// Get the button
let scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

scrollToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};


