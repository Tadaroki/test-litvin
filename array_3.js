// const arr = [];
// arr [0] = [1,2,3];
// arr [1] = [4,5,6];
// arr [2] = [7,8,9];

const arr = [[1,2,3],[4,5,6],[7,8,9]];

const getSumColumn = (arr, column) => {
  let sum = 0;

  arr.forEach((el) => (sum += el[column]));

  return sum;
};

console.log(getSumColumn(arr, 2));
