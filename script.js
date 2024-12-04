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

