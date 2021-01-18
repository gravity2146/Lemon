"use strict";

const target = Math.round(Math.random() * 101);
let score = 0;
// while (true) {
function start() {
  document.querySelector(".check").addEventListener("click", function () {
    let x = Number(document.querySelector(".guess").value);
    if (x > target) {
      document.querySelector(".message").textContent =
        "It's High than Target Number😝 🎃";
      document.querySelector(".score").textContent--;
      score++;
    } else if (x < target) {
      if (document.querySelector(".score").textContent > 1) {
        document.querySelector(".message").textContent =
          "It's Low than Target Number😝 🎃";
        document.querySelector(".score").textContent--;
        score++;
      } else {
        document.querySelector(".message").textContent = "You lost the Game 🤯";
        document.querySelector(".score").textContent = "No Attempt Left";
        score = "Lost";
        document.querySelector("body").style.backgroundColor = "red";
        document.querySelector(".number").textContent = target;
        document.querySelector(".highscore").textContent = "🤡";
      }
    } else if (!x) {
      document.querySelector(".message").textContent = " 🏮  No Number ";
      console.log(x);
    } else {
      document.querySelector(".message").textContent =
        "You Got The Target Number 👑 ";
      document.querySelector(".highscore").textContent = score;
      document.querySelector(".number").textContent = target;
      document.querySelector("body").style.backgroundColor = "green";
    }
  });
}
start();
document.querySelector(".again").addEventListener("click", function () {
  window.location.reload();
});
