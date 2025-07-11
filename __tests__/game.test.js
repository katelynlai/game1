const Game = require('../game');

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

describe('Game', () => {
  let game;

  beforeEach(() => {
  game = new Game();
  game.rl = {
    question: jest.fn(),
    close: jest.fn()
  };
});

  test('initializes players and board', () => {
    expect(game.players.length).toBe(2);
    expect(game.players[0].name).toBe('Player 1');
    expect(game.board).toBeDefined();
  });

  test('checkWin returns true for winning row', () => {
    game.board.state = ['X', 'X', 'X', '', '', '', '', '', ''];
    expect(game.checkWin('X')).toBe(true);
  });

  test('checkWin returns true for winning column', () => {
    game.board.state = ['O', '', '', 'O', '', '', 'O', '', ''];
    expect(game.checkWin('O')).toBe(true);
  });

  test('checkWin returns true for winning diagonal', () => {
    game.board.state = ['X', '', '', '', 'X', '', '', '', 'X'];
    expect(game.checkWin('X')).toBe(true);
  });

  test('checkWin returns false when no win', () => {
    game.board.state = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
    expect(game.checkWin('X')).toBe(false);
    expect(game.checkWin('O')).toBe(false);
  });
  
  test('endGame resets game on replay', () => {
    game.board.reset = jest.fn();
    let called = false;
    game.rl.question = jest.fn((_, cb) => {
      if (!called) {
        called = true;
        cb('y');
      }
    });
    game.isGameOver = true;
    game.endGame();
    expect(game.board.reset).toHaveBeenCalled();
    expect(game.isGameOver).toBe(false);
    expect(game.currentPlayerIndex).toBe(0);
  });

  test('endGame closes readline on quit', () => {
    game.rl.close = jest.fn();
    let called = false;
    game.rl.question = jest.fn((_, cb) => {
      if (!called) {
        called = true;
        cb('n');
      }
    });
    game.endGame();
    expect(game.rl.close).toHaveBeenCalled();
  });
});
