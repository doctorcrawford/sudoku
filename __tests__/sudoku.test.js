import {Sudoku, Row} from './../src/sudoku.js';

describe('Sudoku', () => {

  test ('should add a row to the sudoku game', () => {
    const sudoku = new Sudoku();
    const row1 = new Row();
    sudoku.addRow(row1);
    expect(sudoku.rows[0].id).toEqual(0);
  });
});