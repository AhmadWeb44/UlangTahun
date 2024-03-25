document.addEventListener("DOMContentLoaded", function() {
    const showMessageButton = document.getElementById('showMessageButton');
    const message = document.getElementById('message');
    const birthdaySong = document.getElementById('birthdaySong');

    showMessageButton.addEventListener('click', function() {
        if (message.style.display === 'none') {
            message.style.display = 'block';
            birthdaySong.play();
        } else {
            message.style.display = 'none';
            birthdaySong.pause();
            birthdaySong.currentTime = 0; // Mengatur ulang lagu ke awal
        }
    });
});
