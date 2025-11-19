// Hope Haven Animal Shelter - Interactive Features

document.addEventListener('DOMContentLoaded', function() {

    // Navigation between sections
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.content-section');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');

            // Remove active class from all buttons and sections
            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            // Add active class to clicked button and target section
            this.classList.add('active');
            document.getElementById(targetSection).classList.add('active');

            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Animal filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const polaroids = document.querySelectorAll('.polaroid');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Remove active class from all filter buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Filter polaroids
            polaroids.forEach(polaroid => {
                if (filter === 'all') {
                    polaroid.style.display = 'block';
                    setTimeout(() => {
                        polaroid.style.opacity = '1';
                        polaroid.style.transform = polaroid.style.transform.replace('scale(0.8)', 'scale(1)');
                    }, 10);
                } else {
                    const animalType = polaroid.getAttribute('data-animal');
                    if (animalType === filter) {
                        polaroid.style.display = 'block';
                        setTimeout(() => {
                            polaroid.style.opacity = '1';
                            polaroid.style.transform = polaroid.style.transform.replace('scale(0.8)', 'scale(1)');
                        }, 10);
                    } else {
                        polaroid.style.opacity = '0';
                        polaroid.style.transform = polaroid.style.transform + ' scale(0.8)';
                        setTimeout(() => {
                            polaroid.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });

    // Add smooth transitions to polaroids
    polaroids.forEach(polaroid => {
        polaroid.style.transition = 'all 0.3s ease';
    });

    // Animate need meters on page load
    const animateMeters = () => {
        const meters = document.querySelectorAll('.meter-fill');
        meters.forEach(meter => {
            const targetWidth = meter.style.width;
            meter.style.width = '0%';
            setTimeout(() => {
                meter.style.width = targetWidth;
            }, 300);
        });
    };

    // Check if donate section is visible and animate
    const observerOptions = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateMeters();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const donateSection = document.getElementById('donate');
    if (donateSection) {
        observer.observe(donateSection);
    }

    // Add hover effect to polaroids - slight wobble
    polaroids.forEach(polaroid => {
        polaroid.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });

        polaroid.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Sticky notes random rotation on load
    const stickyNotes = document.querySelectorAll('.sticky-note');
    stickyNotes.forEach((note, index) => {
        const rotations = [-2, -1, 1, 2];
        const randomRotation = rotations[index % rotations.length];
        note.style.transform = `rotate(${randomRotation}deg)`;
    });

    // Add a subtle parallax effect to the header
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const header = document.querySelector('.site-header');

        if (header) {
            header.style.transform = `translateY(${scrollTop * 0.3}px)`;
            header.style.opacity = Math.max(0.3, 1 - (scrollTop / 400));
        }

        lastScrollTop = scrollTop;
    }, { passive: true });

    // Add click effect to volunteer cards
    const volunteerCards = document.querySelectorAll('.volunteer-card');
    volunteerCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });

    // Easter egg: Click on the shelter name 5 times for a surprise
    let clickCount = 0;
    const shelterName = document.querySelector('.shelter-name');
    const surprises = [
        '🐶🐱🐰',
        '❤️❤️❤️',
        '🐾🐾🐾',
        '🎉🎉🎉',
        'Thank you for caring! 💕'
    ];

    shelterName.addEventListener('click', function() {
        clickCount++;
        if (clickCount === 5) {
            const originalText = this.textContent;
            let surpriseIndex = 0;

            const showSurprises = setInterval(() => {
                this.textContent = surprises[surpriseIndex];
                surpriseIndex++;

                if (surpriseIndex >= surprises.length) {
                    clearInterval(showSurprises);
                    setTimeout(() => {
                        this.textContent = originalText;
                        clickCount = 0;
                    }, 2000);
                }
            }, 500);
        }
    });

    // Accessibility: Keyboard navigation for filter buttons
    filterButtons.forEach((button, index) => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                const nextIndex = (index + 1) % filterButtons.length;
                filterButtons[nextIndex].focus();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                const prevIndex = (index - 1 + filterButtons.length) % filterButtons.length;
                filterButtons[prevIndex].focus();
            }
        });
    });

    // Log a friendly message to console
    console.log('%c🐾 Hope Haven Animal Shelter 🐾', 'font-size: 20px; font-weight: bold; color: #457b9d;');
    console.log('%cThanks for visiting! Every animal deserves a loving home.', 'font-size: 14px; color: #2c3e50;');
    console.log('%cInterested in helping with our website? Email: volunteers@hopehaven.org', 'font-size: 12px; font-style: italic; color: #666;');

});

// Add a simple loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
