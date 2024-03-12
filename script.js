console.log(`Let start js`);
let songIndex = 0; // initializing
let audioElement = new Audio('audio.mp3'); // song selection
let masterPlay = document.getElementById(`masterPlay`); // play button selection
let myProgressBar = document.getElementById(`myprogressbar`); // progress bar selection
let gif = document.getElementById(`gif`);
// storing playlist in an array
let songs = [
    { songName: "Let's me loves u", filePath: "audio.mp3", coverPath: "images/images6.jpeg" },
    { songName: "Let's me loves u", filePath: "audio.mp3", coverPath: "images/images6.jpeg" },
    { songName: "Let's me loves u", filePath: "audio.mp3", coverPath: "images/images6.jpeg" },
    { songName: "Let's me loves u", filePath: "audio.mp3", coverPath: "images/images6.jpeg" },
    { songName: "Let's me loves u", filePath: "audio.mp3", coverPath: "images/images6.jpeg" },
    { songName: "Let's me loves u", filePath: "audio.mp3", coverPath: "images/images6.jpeg" },
    { songName: "Let's me loves u", filePath: "audio.mp3", coverPath: "images/images6.jpeg" }
];

masterPlay.addEventListener(`click`, () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove(`fa-play-circle`);
        masterPlay.classList.add(`fa-pause-circle`);
        gif.style.opacity = 1;

    } else {
        audioElement.pause();
        masterPlay.classList.remove(`fa-pause-circle`);
        masterPlay.classList.add(`fa-play-circle`);
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener(`timeupdate`, () => {
    console.log(`timeupdate`);
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
});
