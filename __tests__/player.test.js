const Player = require('../player.js');

describe('Player', () => {
  test('initializes with name and mark', () => {
    const player = new Player('Player 1', 'X');
    expect(player.name).toBe('Player 1');
    expect(player.mark).toBe('X');
    expect(player.score).toBe(0);
  });

  test('incrementScore() increases score', () => {
    const player = new Player('Player 2', 'O');
    player.incrementScore();
    expect(player.score).toBe(1);
  });
});
