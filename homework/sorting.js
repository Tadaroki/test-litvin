const arrayToSort1 = [-5, 100, 10, -20, -1000];
const arrayToSort2 = [3.14, 50, 2.55, 1, 3.123456789];
const arrayToSort3 = ["s", "a", "string", "x", "js"];

function arraySort(array) {
  return array.sort();
}

console.log(arraySort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(arraySort(arrayToSort1), arraySort(arrayToSort2));
console.log(arrayToSort3.sort());