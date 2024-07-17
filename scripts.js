window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 70) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

//for cursor movement
document.addEventListener('mousemove', function(event) {
    const blueCircle = document.querySelector('.blue-circle');
    const offsetX = -1250; // Adjust to center horizontally
    const offsetY = -300; // Adjust to position just under the cursor vertically
    
    const posX = event.clientX + offsetX;
    const posY = event.clientY + offsetY;
    
    blueCircle.style.left = posX + 'px';
    blueCircle.style.top = posY + 'px';
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Remove active class from all nav links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked nav link
            event.currentTarget.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nvl');
    const carouselItems = document.querySelectorAll('.carousel-item');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Remove active class from all nav links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to the clicked nav link
            event.currentTarget.classList.add('active');
            
            // Get the target section
            const target = document.querySelector(event.currentTarget.dataset.target);
            
            // Remove active class from all carousel items
            carouselItems.forEach(item => item.classList.remove('active'));
            
            // Add active class to the target carousel item
            target.classList.add('active');
        });
    });
});

