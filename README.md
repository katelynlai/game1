# Tic-Tac-Toe Game

A simple command-line Tic-Tac-Toe game built with Node.js.

## Features

- Interactive command-line gameplay
- Two-player mode (Player 1: X, Player 2: O)
- Formatted game board display
- Play again option
- Win detection for rows, columns, and diagonals
- Draw detection when board is full
- Exit game option (type "quit")

## How to Run

### Prerequisites
- Node.js installed on your system

### Running the Game
Run the command
```bash
node game.js
```

## How to Play

1. The game starts with an empty 3x3 board
2. Players take turns choosing a cell (1-9) to place their mark
3. Enter a number from 1-9 corresponding to the board position:
   ```
   1 | 2 | 3
   ─── ─── ───
   4 | 5 | 6
   ─── ─── ───
   7 | 8 | 9
   ```
4. The first player to get three marks in a row (horizontally, vertically, or diagonally) wins
5. If all cells are filled without a winner, it's a draw
6. After each game, choose to play again or exit
7. Type "quit" at any time to exit the game

## Project Structure

```
├── board.js         # Board class - manages game state and display
├── game.js          # Game class - main game logic and flow
├── player.js        # Player class - player data and scoring
├── index.js         # Entry point
├── package.json     # Project configuration
└── __tests__/       # Test files
    ├── board.test.js
    ├── game.test.js
    └── player.test.js
```

## Testing

Run the test suite with:
```bash
npm test
```
