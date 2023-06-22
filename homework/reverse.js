const arrayToReverse1 = [-5, 'String', 10, 'ED', -20];
const arrayToReverse2 = [3.14, 50, 2.55, 1, 3.123456789];

function arrayReverse(array) {
  let reversed = [];
  for (let i = array.length - 1; i >= 0; i--) { //elements iterating from the end
    reversed.push(array[i]); //add element to the end of the array
  }
  return reversed;
}

console.log(arrayReverse([1,2,3,4,5,6,7,8,9,10]));
console.log(arrayReverse(arrayToReverse1), arrayReverse(arrayToReverse2));
