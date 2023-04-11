export function Sudoku() {
  this.rows = {};
  this.columns = {};
}

Sudoku.prototype.addRow = function (row) {
  this.rows = row;
};

export function Line(location) {
  this.locations = location;
}