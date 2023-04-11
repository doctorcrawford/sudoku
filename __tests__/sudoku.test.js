import Sudoku from './../src/sudoku.js';

describe('Sudoku', () => {

  test ('should make a Sudoku object', () => {
    const sudoku = new Sudoku();
    expect(sudoku).toEqual({});
  });
});