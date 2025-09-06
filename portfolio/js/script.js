document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Function to toggle the mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});