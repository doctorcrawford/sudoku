export function Sudoku() {
  this.rows = {};
  this.columns = {};
  this.currentId = -1;
}

Sudoku.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Sudoku.prototype.addRow = function (row) {
  row.id = this.assignId();
  this.rows[row.id] = row;
};

export function Row() {
  this.numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}

// Sudoku.prototype.addColumn = function (column) {
//   this.columns = column;
// };










// /////////
// row6, index 2
// column2, index 6

// {
// [0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0]
// }

