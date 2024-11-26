//script.js File
import { Game } from "./Game.js";
document.addEventListener("DOMContentLoaded", () => {
  const status = document.querySelector(".status");
  const start = document.querySelector(".startbutton");
  start.addEventListener("click", () => {
    const inputsAreValid = Game.validateInputs();

    if (inputsAreValid) {
      Startgame();
    } else {
      status.textContent = "Enter both player names";
    }
  });
  function Startgame() {
    Game.createPlayers();
    Game.turnIndiator();
    Game.enableBoxClicks();
  }

  const resetButton = document.querySelector(".restartbutton");
  resetButton.addEventListener("click",Game.reset)


  
});
