const video = document.querySelector(".video");

const toggle = document.querySelector(".toggle");

const skipButtons = document.querySelectorAll("[data-skip]");
const ratebutton = document.querySelectorAll(".player-slider");
const progress = document.querySelector(".progres");
const progres_fill = document.querySelector(".progres-filled");

function toggleplayandpause() {
  const state = video.paused ? "play" : "pause";
  video[state]();
}

function updateButton() {
  const icon = this.paused ? "►" : "❚❚";

  toggle.textContent = icon;
}

function changebyratebutton() {
 
    video[this.dataset.value]= this.value
  document.querySelector("." + this.dataset.value).textContent = this.value;
}


function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  console.log(scrubTime);
}

let mousedown = false;


function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progres_fill.style.flexBasis = `${percent}%`;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

skipButtons.forEach((button) => button.addEventListener("click", skip));
video.addEventListener("click", toggleplayandpause);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
toggle.addEventListener("click", toggleplayandpause);

ratebutton.forEach((rate) =>
  rate.addEventListener("change", changebyratebutton)
);
video.addEventListener("timeupdate", handleProgress);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));