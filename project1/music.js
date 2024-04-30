// function getkey(e){
//     const audio = document.getSelector('audio[data-key="${e.keycode}"]')
//     console.log(audio)
// }

window.addEventListener("keydown", (e) => {


  const audio = document.querySelector(
    'audio[data-key="' + e.key.charCodeAt(0) + '"]'
  );
  const key = document.querySelector(
    '.key[data-key="' + e.key.charCodeAt(0) + '"]'
  );
  if (!audio) return;

  audio.play();
  key.classList.add("playing");
  setTimeout(() => key.classList.remove("playing"), 200);

});

const key2 = document.querySelectorAll(".key");

key2.forEach((key2) => {
  key2.addEventListener("click", () => {
    const dataValue = key2.dataset.key;
    const audio = document.querySelector('audio[data-key="' + dataValue + '"]');
    if (!audio) return;

    audio.play();
    key2.classList.add("playing");
    setTimeout(() => key2.classList.remove("playing"), 200);

  });
});
