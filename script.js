//has the dom listen to things happening in the current window
window.addEventListener('DomContentLoaded', () => {
  //in the javascript, Square is anything defined with the class square based on the querySelectorAll
  const square = Array.from(document.querySelectorAll(".square"));

  //the JavaScript recognizes the play Again button based on the reset ID i placed on it in the HTML
  const resetButton = document.querySelector("#reset");
// The board starts of as empty strings because nothing is placed yet. This code also sets the first player to x which can be randomized later or set to O depending on preference. Lastly gameActive being set to true used as a check to see the status of the game(has anyone won yet)
  let board = ['','','','','','','','',''];
  let currentPlayer = 'X';
  let gameActive= true;
//win states of the game
  const x-Wins = 'X Wins!';
  const o-Wins = 'O Wins!';
  const catGame = 'Cat Game!';

  //posible ways to win the game are an array of arrays. This will be used to check if any of the players have won the game

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

  /*At this point we need a few different things. we need a function to check the user actions. This function need to put a user token on the corrosponding clicked square (some type of event listener will be needed) and to check that there is not alread a player token in the clicked square
  we need need something that will update the board
  and last something to change the current player
*/
  resetButton.addEventListener('click', resetBoard);
});