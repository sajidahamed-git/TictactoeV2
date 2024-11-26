export const Game = (() => {
  let player1Name, player2Name, player1, player2;
  let currentPlayer = 1;
  let GameStatus;
  let boardArray = Array(9).fill(null);
  console.log(boardArray);

  const boxes = document.querySelectorAll(".box");
  const status = document.querySelector(".status");

  function Player(name, symbol) {
    this.name = name;
    this.symbol = symbol;
  }
  function validateInputs() {
    player1Name = document.querySelector(".player1").value;
    player2Name = document.querySelector(".player2").value;
    if (player1Name && player2Name) {
      return true;
    } else return false;
  }
  function createPlayers() {
    player1 = new Player(player1Name, "X");
    player2 = new Player(player2Name, "O");
    // console.log(player1.name);
    return player1, player2;
  }

  function turnIndiator() {
    if (currentPlayer === 1) {
      status.textContent = `${player1.name}'s Turn - (${player1.symbol})`;
    } else {
      status.textContent = `${player2.name}'s Turn - (${player2.symbol})`;
    }
  }
  function changeCurrentPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
  }

  function enableBoxClicks() {
    boxes.forEach((box) => {
      box.addEventListener("click", function handleClick() {
        clickHandler(box);
      });
    });
  }
  function disableBoxClicks() {
    boxes.forEach((box) => {
      box.removeEventListener("click", function handleClick() {
        clickHandler(box);
      });
    });
  }
  function clickHandler(box) {
    const index = parseInt(box.getAttribute("data-index"));
    if (currentPlayer === 1) {
      box.textContent = player1.symbol;
      boardArray[index] = box.textContent;
      changeCurrentPlayer();
      turnIndiator();
    } else {
      box.textContent = player2.symbol;
      boardArray[index] = box.textContent;
      changeCurrentPlayer();
      turnIndiator();
    }
    console.log(boardArray);
  }

  function gameWon() {}
  return {
    Player,
    validateInputs,
    createPlayers,
    turnIndiator,
    changeCurrentPlayer,
    enableBoxClicks,
    clickHandler,
    disableBoxClicks,
  };
})();
