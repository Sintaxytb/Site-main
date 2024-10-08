document.addEventListener('DOMContentLoaded', function() {


    // Pipe animation
    const pipeBackground = document.querySelector('.pipe-background');

    for (let i = 0; i < 15; i++) {
        const pipe = document.createElement('div');
        pipe.classList.add('pipe');
        pipe.style.left = `${Math.random() * 100}%`;
        pipe.style.animationDelay = `-${Math.random() * 10}s`;
        pipe.style.width = 25 + Math.random() * 25 + "px"; // Random width between 25px and 50px

        pipeBackground.appendChild(pipe);
    }



    // animations when scrolling
    window.addEventListener('scroll', function() {
        const animatedBox = document.querySelector('.animated-box');
        const animatedImage = document.querySelector('.animated-image');

        const boxPosition = animatedBox.getBoundingClientRect().top;
        const imagePosition = animatedImage.getBoundingClientRect().top;

        const screenPosition = window.innerHeight / 1.5; // Adjust divisor as needed


        if (boxPosition < screenPosition) {
            animatedBox.classList.add('show');
        }


        if (imagePosition < screenPosition) {
            animatedImage.classList.add('show');
        }
    });


    // Welcome text animation
    const welcomeText = document.getElementById('welcome-text');
    welcomeText.textContent = "Welcome!";  // Set text content



});