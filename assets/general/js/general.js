document.addEventListener('DOMContentLoaded', () => {
    let video1 = document.querySelector('#video-1');
    let video2 = document.getElementById('video-2');

    video1.addEventListener('ended', e => {
        video1.style.display = "none";
        video2.play();
        video2.loop = true;
    });





});