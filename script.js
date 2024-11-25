import { Game } from "./Game.js";

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.querySelector(".startbutton");

  startButton.onclick = () => {
    StartbuttonHandler();
  };
});

function StartbuttonHandler() {
  const input1 = document.querySelector(".player1").value;
  const input2 = document.querySelector(".player2").value;
  if (input1 && input2) {
    
  } else console.log("enter both player names");
}
