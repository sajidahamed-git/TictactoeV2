export const Game = (() => {
  const input1 = document.querySelector(".player1");
  const input2 = document.querySelector(".player2");
  let player1Name, player2Name, player1, player2;
  let currentPlayer = 1;
  let GameStatus;
  let boardArray = Array(9).fill(null);
  // console.log(boardArray);
  const winPatterns = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Left diagonal
    [2, 4, 6], // Right diagonal
  ];

  const boxes = document.querySelectorAll(".box");
  const status = document.querySelector(".status");

  function Player(name, symbol) {
    this.name = name;
    this.symbol = symbol;
  }
  function validateInputs() {
    player1Name = input1.value;
    player2Name = input2.value;
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
      box.addEventListener("click", handleClick); // Use the function reference
    });
  }
  function disableBoxClicks() {
    boxes.forEach((box) => {
      box.removeEventListener("click", handleClick); // Match the function reference
    });
  }

  function handleClick() {
    clickHandler(this); //acts as an actual event handler
    //this refers to the element that triggered the event
  }

  function clickHandler(box) {
    const index = parseInt(box.getAttribute("data-index"));
    if (box.textContent) {
      console.log("box is filled");
    } else {
      if (currentPlayer === 1) {
        box.textContent = player1.symbol;
        boardArray[index] = box.textContent;
        // checkwin();
        changeCurrentPlayer();
      } else {
        box.textContent = player2.symbol;
        boardArray[index] = box.textContent;
        changeCurrentPlayer();
      }
    }
    // console.log(boardArray);
  checkwin()
  }

  function checkwin() {
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        boardArray[a] &&
        boardArray[a] === boardArray[b] &&
        boardArray[a] === boardArray[c]
      ) {
        disableBoxClicks();
        displayWinner();
        return true;
      }
      if (!boardArray.includes(null)) {
        console.log("its a draw");
        status.textContent = "Game draw";
        return "draw";
      }
    }
    return false; // no winner or draw yet
  }
  function displayWinner() {
    if (currentPlayer === 1) {
      status.textContent = `${player2.name} Won`;
    } else status.textContent = `${player1.name} Won`
  }

  function reset() {
    boxes.forEach((box) => {
      console.log("ddf");
      disableBoxClicks();
      box.textContent = "";
      status.textContent = "";
      boardArray.fill(null);
      currentPlayer = 1;
      input1.value = "";
      input2.value = "";
    });
  }

  return {
    reset,
    Player,
    validateInputs,
    createPlayers,
    turnIndiator,
    changeCurrentPlayer,
    enableBoxClicks,
    clickHandler,
    disableBoxClicks,
    checkwin,
  };
})();
