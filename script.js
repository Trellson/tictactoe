window.addEventListener('DOMContentLoaded', () => {
  const squares = Array.from(document.querySelectorAll(".square"));

  const resetButton = document.querySelector("#reset");
  let board = ['','','','','','','','',''];
  let currentPlayer = 'X';
  let gameActive= true;
  const xWins = 'X Wins!';
  const oWins = 'O Wins!';
  const catGame = 'Cat Game!';

  const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]



  isBoardFulll = (board) =>{
  for (let i=0; i <= 8; i++){
    if(board[i]===''){
      return false
    }
  }
    //set gameActive== false
  return true
};

  
 isWinner = (currentPlayer, board, isBoardFull) => {
   let foundWinner = false;
  /* if (foundWinner = false && isBoardFull = true){
     alert(`Its a ${catGame}`)
   };*/
    for (let i=0; i < winningConditions.length; i++){
      let winConfig = winningConditions[i];
      let firstPosition = winConfig[0];
      if(board[firstPosition] !== currentPlayer)
        continue;
      for (let j= 1; j <= winConfig.length; j++){
        if(winConfig[j] !== firstPosition){
          break;
        }
      }
      foundWinner = true;
    }
   return foundWinner;
  };
  
checkGameState= (board)=>{
 isBoardFull();
  isWinner();
};

isValidMove = (index)=>{
  if (board[index]!==''){
    alert('Invalid move. Pick an empty square.');
    return false;
  }
  return true;
};
  
const userAction = (square, index) => {
if (isValidMove(index) && gameActive==true){
  //this part isnt working**
  square.innerText = currentPlayer;
  board[index] = currentPlayer;
  square.classList.add(`player${currentPlayer}`);
  checkGameState();
  currentPlayer = currentPlayer == 'X' ? 'O': 'X';
}
    
};  
  
  squares.forEach((square, index) =>{
    square.addEventListener('click',() => userAction(square, index));
  });
  resetButton.addEventListener('click', resetBoard);
});