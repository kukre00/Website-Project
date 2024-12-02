// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Handle dropdown visibility in mobile
document.querySelectorAll('.dropdown > a').forEach((dropdownLink) => {
    dropdownLink.addEventListener('click', (e) => {
        // Prevent default behavior for the dropdown menu toggle only
        e.stopPropagation();  // Prevent click event from bubbling up to parent elements
        const parentDropdown = dropdownLink.parentElement;
        parentDropdown.classList.toggle('active'); // Toggle dropdown visibility
    });
});


//Slideshow
let slideIndex = 0;
let slideTimer; // Variable to store the timeout ID
const slidesContainer = document.querySelector('.slide-container'); // Get the container of slides

function initializeSlideshow() {
    const dots = document.getElementsByClassName("dot");
    const slides = document.getElementsByClassName("slide");

    // Set initial active slide and dot
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    dots[slideIndex].className += " active";

    // Start automatic sliding
    slideTimer = setTimeout(showSlides, 5000);
}

// Function to show slides
function showSlides() {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    // Increment slide index
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Loop back to the first slide
    }

    // Move the container to show the correct slide
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Reset all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Activate the corresponding dot
    dots[slideIndex].className += " active";

    // Automatically change slide every 5 seconds
    clearTimeout(slideTimer);
    slideTimer = setTimeout(showSlides, 5000);
}

// Navigate to a specific slide based on the dot clicked
function currentSlide(index) {
    const dots = document.getElementsByClassName("dot");

    // Set the slide index
    slideIndex = index;

    // Move the container to the selected slide
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Reset all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Activate the clicked dot
    dots[slideIndex].className += " active";

    clearTimeout(slideTimer); // Clear the automatic timer when manually navigating
    slideTimer = setTimeout(showSlides, 5000); // Restart the auto-slide timer
}

// Change slide by 1 (Next/Previous)
function plusSlides(n) {
    const slides = document.getElementsByClassName("slide");

    slideIndex += n;

    // If at the end, loop back
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    showSlides();
    clearTimeout(slideTimer); // Clear the automatic timer when manually navigating
    slideTimer = setTimeout(showSlides, 5000); // Restart the auto-slide timer
}

// Initialize the slideshow on page load
document.addEventListener("DOMContentLoaded", initializeSlideshow);






