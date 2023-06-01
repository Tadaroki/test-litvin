function printUpToPromptValue (){
  let even = 0, n;
  n = prompt("Enter any number", 0);
   while(even <= n){

    alert(even);
    even += 2;
 }
}


setTimeout(function () {
  printUpToPromptValue();
}, 200)

