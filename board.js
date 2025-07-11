class Board {
  constructor(state = ['','','','','','','','','']) {
    this.state = state;
  }

  getCell(index) {
    return this.state[index];
  }

  setCell(index, value) {
    this.state[index] = value;
  }

  isFull() {
    return this.state.every(cell => cell !== '');
  }

  reset() {
    this.state.fill('');
  }

  printFormattedBoard() {
	let formattedString = '';
    this.state.forEach((cell, index) => {
    	formattedString += cell ? ` ${cell} |` : '   |';
    	if((index + 1) % 3 == 0)  {
    		formattedString = formattedString.slice(0,-1);
    		if(index < 8) formattedString += '\n\u2015\u2015\u2015 \u2015\u2015\u2015 \u2015\u2015\u2015\n';
    	}
	});
	console.log('%c' + formattedString, 'color: #6d4e42;font-size:16px');
    }
}

const myBoard = new Board();
myBoard.printFormattedBoard();