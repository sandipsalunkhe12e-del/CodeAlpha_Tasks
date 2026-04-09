let songs = [
    {title: "Song 1", artist: "Artist 1", src: "song1.mp3"},
    {title: "Song 2", artist: "Artist 2", src: "song2.mp3"},
    {title: "Song 3", artist: "Artist 3", src: "song3.mp3"}
];

let index = 0;
let audio = document.getElementById("audio");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let progress = document.getElementById("progress");
let volume = document.getElementById("volume");

function loadSong(i) {
    audio.src = songs[i].src;
    title.innerText = songs[i].title;
    artist.innerText = songs[i].artist;
}

loadSong(index);

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextSong() {
    index = (index + 1) % songs.length;
    loadSong(index);
    audio.play();
}

function prevSong() {
    index = (index - 1 + songs.length) % songs.length;
    loadSong(index);
    audio.play();
}

/* Progress bar */
audio.ontimeupdate = function () {
    progress.value = (audio.currentTime / audio.duration) * 100;
};

progress.oninput = function () {
    audio.currentTime = (progress.value / 100) * audio.duration;
};

/* Volume */
volume.oninput = function () {
    audio.volume = volume.value;
};

/* Autoplay next */
audio.onended = function () {
    nextSong();
};