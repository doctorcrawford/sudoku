import {Sudoku, Line} from './../src/sudoku.js';

describe('Sudoku', () => {

  test ('should make a Sudoku object', () => {
    const sudoku = new Sudoku();
    const row1 = new Line();
    sudoku.addRow(row1);
    expect(sudoku.rows).toEqual({row1});
  });
});