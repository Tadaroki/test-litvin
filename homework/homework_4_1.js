const arrrr = [1, -2, 3, -4, 5, -6, 7, -8];

function revomeNegative(values){
return values >= 0;
}

let result = arrrr.filter(revomeNegative);

console.log(result);
