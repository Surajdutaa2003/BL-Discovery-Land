// Get navbar and logo elements
const navbar = document.querySelector('.discovery-head');
const logo = document.querySelector('.discovery-head-logo img');

// Listen for scroll events
window.addEventListener('scroll', () => {
    // Get the scroll position
    const scrollY = window.scrollY;

    // Add scrolled class when scrolling down past 50px
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Add hide class when scrolling down past 300px
    if (scrollY > 300) {
        navbar.classList.add('hide');
    } else {
        navbar.classList.remove('hide');
    }
});
