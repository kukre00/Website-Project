// Enhanced toggle with smooth height transition
document.querySelectorAll('.program h4').forEach(header => {
    header.addEventListener('click', () => {
        const list = header.nextElementSibling;

        // Check if the list is already open
        if (list.classList.contains('show')) {
            list.classList.remove('show');
            list.style.maxHeight = null; // Collapse the list
        } else {
            list.classList.add('show');
            list.style.maxHeight = list.scrollHeight + "px"; // Expand the list
        }
    });
});

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
