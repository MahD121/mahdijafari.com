let currentPlayer = "X";
const cells = document.querySelectorAll(".cell");

function checkWin() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      cells[a].innerText === currentPlayer &&
      cells[b].innerText === currentPlayer &&
      cells[c].innerText === currentPlayer
    ) {
      return true;
    }
  }

  return false;
}

function makeMove(event) {
  const cell = event.target;
  if (cell.innerText === "") {
    cell.innerText = currentPlayer;

    if (checkWin()) {
      alert(currentPlayer + " wins!");
      resetGame();
    } else if ([...cells].every((cell) => cell.innerText !== "")) {
      alert("It's a draw!");
      resetGame();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function resetGame() {
  cells.forEach((cell) => (cell.innerText = ""));
  currentPlayer = "X";
}
