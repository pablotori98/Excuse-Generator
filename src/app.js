/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let excuse;
  let whoMath = who[Math.floor(Math.random() * 4)];
  let whatMath = what[Math.floor(Math.random() * 4)];
  let whenMath = when[Math.floor(Math.random() * 4)];
  excuse = whoMath + " " + whatMath + " " + whenMath;
  document.querySelector("#excuse").innerHTML = excuse;
};
