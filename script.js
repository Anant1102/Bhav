document.addEventListener('DOMContentLoaded', () => {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const musicToggle = document.getElementById('musicToggle');
    const showCertificateBtn = document.getElementById('showCertificateBtn');
    const heartContainer = document.querySelector('.heart-animation-container');

    let isPlaying = true; // Assume music starts playing due to autoplay

    // Music Play/Pause Toggle
    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            backgroundMusic.pause();
            musicToggle.textContent = '▶️ Click to play music';
        } else {
            backgroundMusic.play();
            musicToggle.textContent = '⏸️ Click to pause music';
        }
        isPlaying = !isPlaying;
    });

    // Open Certificate in a New Window
    showCertificateBtn.addEventListener('click', () => {
        // We'll open certificate.html in a new, styled window
        window.open('certificate.html', '_blank', 'width=800,height=600,resizable=yes,scrollbars=yes');
    });

    // Falling Hearts Animation
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.width = Math.random() * 20 + 10 + 'px'; // Size between 10px and 30px
        heart.style.height = heart.style.width;
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 5 + 5 + 's'; // Duration between 5s and 10s
        heart.style.opacity = '0'; // Start invisible, animation will make it visible

        heartContainer.appendChild(heart);

        // Remove heart after animation to prevent performance issues
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    setInterval(createHeart, 300); // Create a new heart every 300ms
});