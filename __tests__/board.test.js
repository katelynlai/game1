const Board = require('./board.js');

describe('Board', () => {
  let board;

  beforeEach(() => {
    board = new Board();
  });

  test('initial state is empty', () => {
    expect(board.state).toEqual(['','','','','','','','','']);
  });

  test('setCell() sets a value at a position', () => {
    board.setCell(0, 'X');
    expect(board.getCell(0)).toBe('X');
  });

  test('isFull() returns false when board is not full', () => {
    expect(board.isFull()).toBe(false);
  });

  test('isFull() returns true when board is full', () => {
    board.state = ['X','O','X','O','X','O','X','O','X'];
    expect(board.isFull()).toBe(true);
  });

  test('reset() clears the board', () => {
    board.setCell(0, 'X');
    board.reset();
    expect(board.state).toEqual(['','','','','','','','','']);
  });
});
