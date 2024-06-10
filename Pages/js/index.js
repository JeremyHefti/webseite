document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.custom-button');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const videoSrc = button.getAttribute('data-video');
            videoSource.src = videoSrc;
            videoPlayer.load();
            videoPlayer.play();
            videoPlayer.style.display = 'block';
        });
    });
});

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}
