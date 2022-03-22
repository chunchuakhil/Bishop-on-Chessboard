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
  if (event.target.id === 'chess_board') return;

  const [rowPosition, columnPosition] = event.target.id.split('');

  let row = rowPosition;
  let column = columnPosition;

  const resetRowColumn = () => {
    row = rowPosition;
    column = columnPosition;
  };
  // get current element
  visited.push(getBox(row, column));
  // get bottom left boxes
  while (++row <= 8 && --column >= 1) visited.push(getBox(row, column));
  resetRowColumn();
  // get top right boxes
  while (--row >= 1 && ++column <= 8) visited.push(getBox(row, column));
  resetRowColumn();
  // get bottom right boxes
  while (++row <= 8 && ++column <= 8) visited.push(getBox(row, column));
  resetRowColumn();
  // get rop right boxes
  while (--row >= 1 && --column >= 1) visited.push(getBox(row, column));

  visited.forEach((box) => box.classList.add('highlight'));
});
