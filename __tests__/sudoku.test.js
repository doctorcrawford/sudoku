import {Sudoku, Line} from './../src/sudoku.js';

describe('Sudoku', () => {

  test ('should make a Sudoku object', () => {
    const sudoku = new Sudoku();
    const row1 = new Line("a1");
    sudoku.addRow(row1);
    expect(sudoku.rows.locations).toEqual("a1");
  });
});