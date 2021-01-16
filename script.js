"use strict";

// function target(){
//     let value =
// }
let x = document.querySelector(".guess").value;
// console.log(x);
// const z = () => 5;
document.querySelector(".check").addEventListener("click", function () {
  //   console.log(z());
  let x = Number(document.querySelector(".guess").value);
  document.querySelector(".message").textContent = Number(x);
  x < 50
    ? (document.querySelector(".label-score").textContent =
        "you not able to made a half century")
    : (document.querySelector(".label-score").textContent =
        "you made a half century");
});
