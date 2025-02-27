// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar color change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Animation for speaker cards
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('speaker-visible');
        }
    });
}, observerOptions);

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.col.mb-5').forEach(card => {
        observer.observe(card);
    });

    // Initialize particles.js
    if(typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                opacity: { value: 0.5 },
                size: { value: 3 },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                }
            }
        });
    }

    // Add hover effect for speaker images
    const speakerCards = document.querySelectorAll('.col.mb-5');
    
    speakerCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add faded class to all other cards
            speakerCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.add('speaker-faded');
                }
            });
            // Add focused class to hovered card
            card.classList.add('speaker-focused');
        });

        card.addEventListener('mouseleave', () => {
            // Remove all effect classes
            speakerCards.forEach(otherCard => {
                otherCard.classList.remove('speaker-faded');
            });
            card.classList.remove('speaker-focused');
        });
    });
}); 