const Game = require('./game');

describe('Game', () => {
  test('initializes players and board', () => {
    const game = new Game();
    expect(game.players.length).toBe(2);
    expect(game.players[0].name).toBe('Player 1');
    expect(game.board).toBeDefined();
  });
});
