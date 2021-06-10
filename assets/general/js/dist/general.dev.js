"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var video1 = document.querySelector('#video-1');
  var video2 = document.getElementById('video-2');
  video1.addEventListener('ended', function (e) {
    video1.style.display = "none";
    video2.play();
    video2.loop = true;
  });
});