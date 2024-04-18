//****************OPERATIONS********************/

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2); //add
console.log(2-2); //sub
console.log(2*2); //mul
console.log(2**3); //power
console.log(5%2); //mod

let str1 = "Leah"
let str2 = " Lucia"

console.log(str1 + str2);

console.log("1" + 2);  //string
console.log(1 + "2"); //string
console.log("1" + 2 + 3); //string (first 1 is a string then 2 & 3 also wont ad up, it concatenates)
console.log(1 + 2 + "3"); // string (first 1 & 2 add up then finds 3 string then concatinates)

console.log(3 + 4 * 2 % 2); //bad practice
console.log(3 + (( 4 * 2) % 2)); //good pratice

console.log(true);
console.log(+true); // -> gives 1 (converts to number), not v good practice
console.log(+""); // -> gives 0 (if no + then would have been nth empty)
console.log("");

/******************PRECEDENCE********************/

let gameCounter = 100
const prefixing = ++gameCounter; 
//the increment operator increments and returns the value after incrementing.
console.log(prefixing, gameCounter);


const suffixing = gameCounter++;
// the increment operator increments and returns the value before incrementing.
console.log(suffixing, gameCounter);
console.log(gameCounter, suffixing); 
