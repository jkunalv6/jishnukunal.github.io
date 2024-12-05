// Initialize Particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        },
        size: {
            value: 3,
            random: true
        },
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        },
        line_linked: {
            enable: true,
            distance: 100,
            color: '#16A085',
            opacity: 0.5,
            width: 1
        },
        shape: {
            type: 'circle'
        }
    },
   
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode'); // Toggle the 'dark-mode' class on the body
    });

    // Initialize Particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            size: {
                value: 4,
                random: true
            },
            move: {
                enable: true,
                speed: 3,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#16A085',
                opacity: 0.5,
                width: 1
            },
            shape: {
                type: 'circle'
            }
        },
        
    });
});

window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercent = (scrollPosition / scrollHeight) * 100;

    // Update the width of the scroll indicator
    document.getElementById('scroll-indicator').style.width = scrollPercent + '%';

    // Interpolating colors based on the scroll position
    var startColor = 52 + (scrollPercent * (22 - 142) / 100); // Transition from 52 to 22
    var endColor = 73 + (scrollPercent * (8 -  190) / 100);  // Transition from 73 to 160
    var greenColor = 94 + (scrollPercent * (216 - 238) / 100); // Transition from 94 to 133

    // Set the background gradient dynamically
    var colorStart = `rgb(${startColor}, ${endColor}, ${greenColor})`;
    var colorEnd = `rgb(39, 8, 216)`; // Final color when fully scrolled down

    // Apply the gradient to the scroll indicator
    var gradient = `linear-gradient(to right, ${colorStart}, ${colorEnd})`;
    document.getElementById('scroll-indicator').style.background = gradient;
};

// JavaScript to detect when the user has scrolled to the bottom
window.addEventListener('scroll', function() {
    var scrollPosition = window.innerHeight + window.scrollY;
    var documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const heroSection = document.querySelector('.hero');
    const heroText = document.querySelector('.dynamic-gradient');
    const threshold = 100; // The threshold scroll position at which zoom will start happening

    let isZoomed = false;

    // Function to handle the zoom effect
    function handleZoomOnScroll() {
        const scrollPosition = window.scrollY;  // Get the current scroll position

        // Apply the zoom effect until the threshold is crossed
        if (scrollPosition < threshold) {
            let scale = 1 + scrollPosition / threshold * 0.3;  // Gradual zoom effect
            heroSection.style.transform = `scale(${scale})`;  // Apply scaling on the hero section
        } else {
            if (!isZoomed) {
                heroSection.classList.add('zoom');  // Finalize the zoom effect
                isZoomed = true;
            }
        }
    }

    // Scroll event listener
    window.addEventListener('scroll', handleZoomOnScroll);

    // Prevent page scrolling during the zoom effect until the zoom is complete
    window.addEventListener('wheel', function(e) {
        if (!isZoomed) {
            e.preventDefault();  // Prevent scroll while zooming
        }
    });
});
