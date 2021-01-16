"use strict";

// function target(){
//     let value =
// }
let x = document.querySelector(".guess").value;
// console.log(x);
// const z = () => 5;
document.querySelector(".check").addEventListener("click", function () {
  //   console.log(z());
  let x = document.querySelector(".guess").value;
  document.querySelector(".message").textContent = x;
  document.querySelector(".label-score").textContent = x;
});
