// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Message sent! (Demo only)');
        e.target.reset();
    });
}

// Server status button
document.getElementById('server-status').addEventListener('click', () => {
    window.location.href = 'https://status.arthurmasset.cloud/status/m';
});

// Background animation enhancement
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = 'rgba(255, 255, 255, 0.5)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';

    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;

    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;

    document.body.appendChild(particle);

    const angle = Math.random() * Math.PI * 2;
    const velocity = 0.5 + Math.random();
    const lifetime = 3000 + Math.random() * 2000;

    let opacity = 1;
    const startTime = Date.now();

    function updateParticle() {
        const elapsed = Date.now() - startTime;
        if (elapsed > lifetime) {
            particle.remove();
            return;
        }

        opacity = 1 - (elapsed / lifetime);
        const x = parseFloat(particle.style.left) + Math.cos(angle) * velocity;
        const y = parseFloat(particle.style.top) + Math.sin(angle) * velocity;

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.opacity = opacity;

        requestAnimationFrame(updateParticle);
    }

    updateParticle();
}

// Create new particles periodically
setInterval(createParticle, 200);

document.addEventListener('DOMContentLoaded', function() {
    const spotlight = document.getElementById('spotlight');

    document.addEventListener('mousemove', function(e) {
        spotlight.style.left = e.clientX + 'px';
        spotlight.style.top = e.clientY + 'px';
    });
});

// Loading screen handling

document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById("loading");

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.target !== "_blank" && this.href) {
                event.preventDefault(); // Stop default navigation
                loadingScreen.style.display = "flex"; // Show loader

                setTimeout(() => {
                    window.location.href = this.href; // Navigate after delay
                }, 1000); // Adjust timing if needed
            }
        });
    });

    // Hide loader when the page fully loads
    window.onload = function () {
        loadingScreen.style.display = "none";
    };
});
