/**
 * JavaScript Test 3: Tic Tac Toe Game
 * 
 * Task: Implement the game logic for a functional tic-tac-toe game.
 * The HTML and CSS are provided - you only need to add the JavaScript functionality.
 * 
 * Requirements:
 * - Players alternate between X and O (X goes first)
 * - Prevent clicking on occupied cells or after game ends
 * - Check for wins after each move (3 in a row: horizontal, vertical, diagonal)
 * - Detect draws when board is full with no winner
 * - Update the current player display and game status messages
 * - Reset game functionality
 * 
 * Key Elements (already in HTML):
 * - Cells have data-index="0" through "8" 
 * - Current player display: #current-player
 * - Game status display: #game-status
 * - Reset button calls resetGame() function
 */

// Game state variables
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Get DOM elements
const cells = document.querySelectorAll('.cell');
const currentPlayerDisplay = document.getElementById('current-player');
const gameStatus = document.getElementById('game-status');

// Winning combinations - you'll need this for win detection
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]  // diagonals
];

/**
 * Initialize the game when page loads
 */
function initializeGame() {
  // TODO: Add click event listeners to all cells
  cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
  });
  // TODO: Set initial game status message
  updateGameStatus('Click a cell to start playing!');
  currentPlayerDisplay.textContent = '';
  isFirstMove = true;
}

/**
 * Handle when a cell is clicked
 */
function handleCellClick(event) {
  // TODO: Get the clicked cell and its index
  const clickedCell = event.target;
  const clickedCellIndex = parseInt(clickedCell.dataset.index);
  // TODO: Validate the move (check if cell is empty and game is active)
  if (gameBoard[clickedCellIndex] !== '' || !gameActive){
    return;
  }

  if (isFirstMove) {
    currentPlayerDisplay.textContent = currentPlayer;
    updateGameStatus(`Player ${currentPlayer}'s turn`)
    isFirstMove = false;
  }
  // TODO: If valid, make the move
  makeMove(clickedCellIndex, clickedCell);

}

/**
 * Make a move on the board
 */
function makeMove(index, cell) {
  // TODO: Update the gameBoard array
  gameBoard[index] = currentPlayer;
  // TODO: Display X or O in the cell
  cell.textContent = currentPlayer;
  // TODO: Add appropriate CSS classes
  cell.classList.add(currentPlayer === 'X' ? 'cell-x' : 'cell-o');
  // TODO: Check for win or draw
  console.log(checkWinner(), checkDraw())
  if (checkWinner()) {
    endGame(`Player ${currentPlayer} Wins!`, `status-win`);
  } else if (checkDraw()) {
    endGame('It\'s a Draw!', 'status-draw');
  } else {
  // TODO: If game continues, switch players
    switchPlayer();
  }
}

/**
 * Check if the current player has won
 */
function checkWinner() {
  // TODO: Check if any winning combination is satisfied
  // TODO: Return true if current player wins, false otherwise
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (gameBoard[a] === currentPlayer && gameBoard[b] === currentPlayer && gameBoard [c] === currentPlayer) {
      return true
    }
  }
  return false;
}

/**
 * Check if the game is a draw
 */
function checkDraw() {
  // TODO: Return true if board is full and no winner
  return !gameBoard.includes('');
}

/**
 * Switch to the other player
 */
function switchPlayer() {
  // TODO: Change currentPlayer from X to O or O to X
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  // TODO: Update the display
  currentPlayerDisplay.textContent = currentPlayer;
  // TODO: Update game status message
  updateGameStatus(`Player ${currentPlayer}'s turn`);
}

/**
 * End the game with a message
 */
function endGame(message, statusClass) {
  // TODO: Set gameActive to false
  gameActive = false;
  // TODO: Display the end game message
  updateGameStatus(message, statusClass);
}

/**
 * Reset the game to start over
 */
function resetGame() {
  // TODO: Reset all game state variables
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  isFirstMove = true;
  // TODO: Clear the board display
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('cell-x', 'cell-o');
  });
  // TODO: Reset player display and status message
  updateGameStatus(`Player ${currentPlayer}'s turn`);
  currentPlayerDisplay.textContent = currentPlayer;
}

/**
 * Update the game status message
 * @param {string} message - The status message to display
 */
function updateGameStatus(message, className = '') {
  // TODO: Update the game status display
  gameStatus.textContent = message;
  // TODO: Reset CSS classes to default
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', initializeGame); 