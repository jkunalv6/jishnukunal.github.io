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


