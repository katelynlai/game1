const readline = require('readline');
const Board = require('./board');
const Player = require('./player');

class Game {
    constructor() {
        this.board = new Board();
        this.players = [
            new Player('Player 1', 'X'),
            new Player('Player 2', 'O')
        ];
        this.currentPlayerIndex = 0;
        this.isGameOver = false;

        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    start() {
        console.log('Welcome to Tic-Tac-Toe!\n');
        console.log('type "quit" to exit game\n');
        this.playTurn();
    }

    playTurn() {
        this.board.printFormattedBoard();
        const currentPlayer = this.players[this.currentPlayerIndex];
        this.rl.question(`${currentPlayer.name} (${currentPlayer.mark}), choose a cell (1–9): `, (input) => {
            const cellNum = parseInt(input);
            const index = cellNum - 1;  // <-- convert 1-based to 0-based
            if (input === "quit") {
                console.log('Thanks for playing!');
                this.rl.close();
                return;
            }

            if (isNaN(index) || index < 0 || index > 8 || this.board.getCell(index) !== '') {
                console.log('Try again.\n');
                this.playTurn();
                return;
            }

            this.board.setCell(index, currentPlayer.mark);

            if (this.checkWin(currentPlayer.mark)) {
                this.board.printFormattedBoard();
                console.log(`${currentPlayer.name} wins!`);
                currentPlayer.incrementScore();
                this.isGameOver = true;
                return this.endGame();
            }

            if (this.board.isFull()) {
                this.board.printFormattedBoard();
                console.log("Draw!");
                this.isGameOver = true;
                return this.endGame();
            }

            this.currentPlayerIndex = 1 - this.currentPlayerIndex;
            this.playTurn();
        });
    }

    checkWin(mark) {
        const s = this.board.state;
        const winCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6]             // diagonals
        ];

        return winCombos.some(combo =>
            combo.every(i => s[i] === mark)
        );
    }

    endGame() {
        this.rl.question('🔁 Play again? (y/n): ', (answer) => {
            if (answer.toLowerCase() === 'y') {
                this.board.reset();
                this.isGameOver = false;
                this.currentPlayerIndex = 0;
                this.playTurn();
            } else {
                console.log('Thanks for playing!');
                this.rl.close();
            }
        });
    }
}

// Start the game
const game = new Game();
game.start();
