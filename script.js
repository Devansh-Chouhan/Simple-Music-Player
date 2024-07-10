var arr = [
  {
    songName: "Pehle bhi me",
    url: "./songs/Pehle Bhi Main Animal 128 Kbps.mp3",
    img: "./images/animal.jpg",
    duration: "4:10",
  },
  {
    songName: "Arjan Vailly",
    url: "./songs/Arjan Vailly Animal 128 Kbps.mp3",
    img: "./images/animal.jpg",
    duration: "3:02",
  },
  {
    songName: "Ram siya ram",
    url: "./songs/Ram Siya Ram Adipurush 128 Kbps.mp3",
    img: "./images/adipurush.jpg",
    duration: "3:05",
  },
  {
    songName: "Kesari ke lal",
    url: "./songs/Keejo Kesari Ke Laal_64-(PagalWorld).mp3",
    img: "./images/kesariKeLal.jpg",
    duration: "6:12",
  },
  {
    songName: "7 Years",
    url: "./songs/Lukas_Graham_-_7_Years_(Naijay.com).mp3",
    img: "./images/7Years.jpg",
    duration: "3.59",
  },
  {
    songName: "God's Plan",
    url: "./songs/88960522012024082538.mp3",
    img: "./images/GodsPlan.jpg",
    duration: "3.19",
  },
];

var allSongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");
var audio = new Audio();
var selectedSong = 0;
var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");

function mainFunction() {
  var clutter = "";
  arr.forEach(function (elem, indx) {
    clutter += `<div class="song-card" id="${indx}">
        <div class="part1">
            <img src="${elem.img}" alt="">
            <h2>${elem.songName}</h2>
        </div>
        <h6>${elem.duration}</h6>
    </div>`;
  });
  allSongs.innerHTML = clutter;
  audio.src = arr[selectedSong].url;
  poster.style.backgroundImage = `url(${arr[selectedSong].img})`;
}
mainFunction();

allSongs.addEventListener("click", function (dets) {
  selectedSong = dets.target.id;
  play.innerHTML = `<i class="ri-pause-mini-line"></i>`;
  flag = 1;
  mainFunction();
  audio.play();
});
var flag = 0;
play.addEventListener("click", function () {
  if (flag === 0) {
    play.innerHTML = `<i class="ri-pause-mini-line"></i>`;
    mainFunction();
    audio.play();
    flag = 1;
  } else {
    play.innerHTML = `<i class="ri-play-mini-line"></i>`;
    mainFunction();
    audio.pause;
    flag = 0;
  }
});
forward.addEventListener("click", function () {
  if (selectedSong < arr.length - 1) {
    selectedSong++;
    mainFunction();
    audio.play();
  } else {
    forward.style.opacity = 0.4;
  }
});

backward.addEventListener("click", function () {
  if (selectedSong > 0) {
    selectedSong--;
    mainFunction();
    audio.play();
  } else {
    backward.style.opacity = 0.4;
  }
});
