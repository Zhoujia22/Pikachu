import string from "./css.js";

const demo = document.querySelector("#demo");
const demo2 = document.querySelector("#demo2");

const player = {
  n: 1,

  time: 100,

  id: undefined,

  init: () => {
    demo.innerText = string.substring(0, player.n);
    demo2.innerHTML = string.substring(0, player.n);
    player.play();
    player.bindEvents();
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  bindEvents: () => {
    for (let key in player.events)
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
  },

  run: () => {
    player.n = player.n + 1;
    if (player.n  > string.length) {
      window.clearInterval(player.id);
      return;
    }
    demo.innerText = string.substring(0, player.n);
    demo2.innerHTML = string.substring(0, player.n);
    demo.scrollTop = demo.scrollHeight;
  },
  play: () => {
    player.id = setInterval(player.run, player.time);
  },

  pause: () => {
    window.clearInterval(player.id);
  },

  slow: () => {
    player.time = 300;
    player.pause();
    player.play();
  },

  normal: () => {
    player.time = 100;
    player.pause();
    player.play();
  },

  fast: () => {
    player.time = 0;
    player.pause();
    player.play();
  },
};

player.init();
