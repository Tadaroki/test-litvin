const array1 = [-5, 10, -20];
const array2 = [3.14, 50, 2.55, 1, 3.123456789];

function arraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(arraySum([1, 2, 3, 4]));
console.log(arraySum(array1), arraySum(array2));


// another loop method
// for (const value of array) {
//     sum += value;
//   }

// forEach method
// array.forEach(item => {
// sum += item;
// });
