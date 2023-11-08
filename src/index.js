import "./index.scss";

const rainBtn = document.querySelector("#rain");
const summerBtn = document.querySelector("#summer");
const winterBtn = document.querySelector("#winter");
const background = document.querySelector("#background");
const volume = document.querySelector("#volume");
let audio = document.querySelector("audio");

rainBtn.addEventListener("click", onItemClick);
summerBtn.addEventListener("click", onItemClick);
winterBtn.addEventListener("click", onItemClick);
volume.addEventListener("click", onVolumeClick);

let activeItem = "";

function onVolumeClick(event) {
  console.log("event", event);
  audio.volume = volume.value;
  audio.play();
}

function onItemClick(event) {
  !activeItem
    ? background.classList.add(event.target.id)
    : background.classList.replace(activeItem, event.target.id);
  activeItem = event.target.id;
}
