/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var color = 0;
var suite = 0;
var cardNum = 0;

function randCard() {
  //color pick
  color = Math.floor(Math.random() * 2);
  suite = Math.floor(Math.random() * 4);
  cardNum = Math.floor(Math.random() * 12) + 1;

  if (suite == 0) {
    suite = "♦";
  } else if (suite == 1) {
    suite = "♥";
  } else if (suite == 2) {
    suite = "♠";
  } else {
    suite = "♣";
  }

  if (color == 0) {
    document.querySelector("#suite-top").style.color = "red";
    document.querySelector("#suite-bottom").style.color = "red";
  } else {
    document.querySelector("#suite-top").style.color = "black";
    document.querySelector("#suite-bottom").style.color = "black";
  }

  if (cardNum == 12) {
    cardNum = "K";
  } else if (cardNum == 11) {
    cardNum = "Q";
  } else if (cardNum == 10) {
    cardNum = "J";
  } else if (cardNum == 1) {
    cardNum = "A";
  } else {
    cardNum = cardNum;
  }
}

function render() {
  randCard();

  document.querySelector("#suite-top").innerHTML = `<div>
      <p id= "suite-top">${suite} </p>
</div>`;
  document.querySelector("#number").innerHTML = `<div>
          <p id= "number">${cardNum}</p>     
  </div>`;
  document.querySelector("#suite-bottom").innerHTML = `<div>
      <p id= "suite-bottom">${suite} </p>
</div>`;
}

window.onload = function() {
  //call function
  render();
  const element = document.getElementById("newCardBtn");
  element.addEventListener("click", render);
};
