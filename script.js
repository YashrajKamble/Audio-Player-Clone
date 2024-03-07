console.log("welcome to my first javascript project");

// initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName('songItem'));

songs = [
  {
    songsName: "warrio",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songsName: "cielo",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songsName: "DEAF KEV",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songsName: "different heaven &H!de",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songsName: "janji heroes",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songsName: "rabba",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songsName: "sakhiyaan",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName('img')[0].src = songs[i].coverPath;
  element.getElementsByClassName('songName')[0].innerText = songs[i].songsName;
});
// audioElements.play();

// handle play/pause click
masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity = 0;
  }
});

// Listen to events
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
  audioElement.currentTime = (myProgressBar.value * audioElement.duration / 100);
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
  })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    makeAllPlays();
    index = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = 'songs/${index+1}.mp3';
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
  })
})
