const board = document.querySelector('#chess_board');
const rows = 8;
const columns = 8;

for (let rowPointer = 0; rowPointer < rows; rowPointer++) {
  for (let columnPointer = 0; columnPointer < columns; columnPointer++) {
    const square = document.createElement('div');
    square.setAttribute('id', `${rowPointer + 1}${columnPointer + 1}`);
    board.appendChild(square);
  }
}

const getBox = (row, column) => document.getElementById(`${row}${column}`);
let visited = [];

board.addEventListener('mouseout', () => {
  visited.forEach((box) => box.classList.remove('highlight'));
  visited = [];
});

board.addEventListener('mouseover', (event) => {
  const boxPosition = event.target.id.split('');
  let row = boxPosition[0];
  let column = boxPosition[1];

  const resetRowColumn = () => {
    row = boxPosition[0];
    column = boxPosition[1];
  };
  visited.push(getBox(row, column));

  while (++row <= 8 && --column >= 1) visited.push(getBox(row, column));

  resetRowColumn();

  while (--row >= 1 && ++column <= 8) visited.push(getBox(row, column));

  resetRowColumn();

  while (++row <= 8 && ++column <= 8) visited.push(getBox(row, column));

  resetRowColumn();

  while (--row >= 1 && --column >= 1) visited.push(getBox(row, column));

  visited.forEach((box) => box.classList.add('highlight'));
});
