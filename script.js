console.log("welcome to my first javascript project");

// initialize the variables
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");

songs = [
  {
    songsName: "salame-e-ishq",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songsName: "salame-e-ishq",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songsName: "salame-e-ishq",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songsName: "salame-e-ishq",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songsName: "salame-e-ishq",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songsName: "salame-e-ishq",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songsName: "salame-e-ishq",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
];

// audioElements.play();

// handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
  }
});

// Listen to events
myProgressBar.addEventListener("timeUpadate");
() => {
  console.log("timeUpdate");
};
