import soundRain from "./sounds/rain.mp3";
import soundSummer from "./sounds/summer.mp3";
import soundWinter from "./sounds/winter.mp3";

import "./index.scss";

const rainItem = document.querySelector("#rain");
const summerItem = document.querySelector("#summer");
const winterItem = document.querySelector("#winter");
const background = document.querySelector("#background");
const volume = document.querySelector("#volume");

rainItem.addEventListener("click", onItemClick);
summerItem.addEventListener("click", onItemClick);
winterItem.addEventListener("click", onItemClick);
volume.addEventListener("click", onVolumeClick);

const audio = new Audio(soundWinter);
const songs = [soundSummer, soundRain, soundWinter];
const items = [summerItem, rainItem, winterItem];
let activeItem = "";

function itemIndex(itemName) {
  switch (itemName) {
    case "summer":
      return 0;
    case "rain":
      return 1;
    case "winter":
      return 2;
  }
}

function playPauseSong(name) {
  const itemIdx = itemIndex(name);
  const isPlay = items[itemIdx].classList.contains("play");

  if (activeItem === name && isPlay) {
    items[itemIdx].classList.remove("play");
    audio.pause();
    return;
  }

  for (let i = 0; i < items.length; i++) {
    if (i === itemIdx) {
      items[i].classList.add("play");
    } else {
      items[i].classList.remove("play");
    }
  }

  audio.play();
}

function onVolumeClick() {
  audio.volume = volume.value;
}

function setSong(itemName) {
  if (activeItem === itemName) return;
  const indexSong = itemIndex(itemName);
  audio.setAttribute("src", songs[indexSong]);
}

function onItemClick(event) {
  const item = event.currentTarget.id;

  !activeItem
    ? background.classList.add(item)
    : background.classList.replace(activeItem, item);

  setSong(item);
  playPauseSong(item);
  activeItem = item;
}
