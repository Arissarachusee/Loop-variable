// Experiment with this loop by modifying each of the following: the variable initialization, the boolean condition, and the update expression.

// for (let i = -2; i > -1; i--) {
//   console.log(i);
// }


let phrase = "LaunchCode's LC101";

for (let i = 0; i < phrase.length - 1; i = i + 3) {
   console.log(phrase[i]);
}


let n = 6;
let total = 0;

for (let i = 1; i <= n; i++) {
   console.log(total += i);
}


let str = "blue";
let reversed = "";

for (let i= 0 ; i< str.length ; i++) {
    
     reversed =str[i] + reversed ;
}
console.log(reversed);
  


