window.addEventListener('DOMContentLoaded', () => {
  const squares = Array.from(document.querySelectorAll(".square"));

  const resetButton = document.querySelector("#reset");
  let board = ['', '', '', '', '', '', '', '', ''];
  let currentPlayer = 'X';
  let gameActive = true;
  const xWins = 'X Wins!';
  const oWins = 'O Wins!';
  const catGame = 'Cat Game!';

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];



  const isBoardFull = (board) => {
    for (let i = 0; i <= 8; i++) {
      if (board[i] === '') {
        return false
      }
    }
    // set gameActive== false
    return true
  };

  const isWinner = (currentPlayer, board) => {
    let foundWinner =false;

    for (let i=0; i < winningConditions.length; i++){
      let winConfig = winningConditions[i];
      let firstPosition = winConfig[0];
      if (board[firstPosition] !== currentPlayer)
        continue;
      for (let j = 1; j <= winConfig.length; j++){
        let tokenAtPosition = board[winConfig[j]];
        if (tokenAtPosition !== board [firstPosition]) {
          break;
        } 
        else if( j=== winConfig.length-1) {
          foundWinner = true;
        }
      }
    }
    return foundWinner;
  };

    
  checkGameState = (board, currentPlayer) => {
    if (isBoardFull(board) === true && isWinner(board, currentPlayer) === false) {
      alert(catGame);

    }
    else {
      console.log(isWinner(currentPlayer, board))
      if (isWinner(currentPlayer, board) == true) {
        document.getElementById("board").disabled = true;
        alert(`${currentPlayer}Wins`);
    
      }
    };
    return
  };

  isValidMove = (index) => {
    if (board[index] !== '') {
      alert('Invalid move. Pick an empty square.');
      return false;
    }
    return true;
  };

  const userAction = (square, index) => {
    if (isValidMove(index) && gameActive == true) {
      square.innerText = currentPlayer;
      board[index] = currentPlayer;
      square.classList.add(`player${currentPlayer}`);
      //.classList
      checkGameState(board, currentPlayer);
      currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
      document.querySelector(".display-player").innerHTML =
        `${currentPlayer}`;
    };

  };

  squares.forEach((square, index) => {
    square.addEventListener('click', () => userAction(square, index));
  });
  resetButton.addEventListener('click', resetBoard);
});