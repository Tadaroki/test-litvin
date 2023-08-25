const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const sumRows = console.log(array.map((n) => n.reduce((sum, m) => sum + m, 0)));

const sumCols = console.log(
  array[0].map((n, i) => array.reduce((sum, m) => sum + m[i], 0))
);

//new