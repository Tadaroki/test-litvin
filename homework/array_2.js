const arrr = [1, 2, 3, 4, 5, 6, 7, 8];

// anonymous function asd
let result = arrr.reduce(
  (initialValue, currentValue) => initialValue + currentValue,
  0
); // 0 = initialValue

console.log(result);
