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