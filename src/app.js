/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let simbolo = ["J", "K", "Q", "A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let random = Math.floor(Math.random() * 13);
  let simbolos = ["♦", "♥", "♠", "♣"];
  let random2 = Math.floor(Math.random() * 3);
  if (simbolos[random2] == "♥" || simbolos[random2] == "♦") {
    document.querySelector("#simbolosuperior").style.color = "red";
    document.querySelector("#simboloinferior").style.color = "red";
  }

  document.querySelector("#numero").append(simbolo[random]);
  document.querySelector("#simbolosuperior").append(simbolos[random2]);
  document.querySelector("#simboloinferior").append(simbolos[random2]);
};
