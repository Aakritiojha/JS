let score = 33
let scores = "33a"

console.log(typeof (score));
console.log(typeof (scores));   correct

let scoreInNum = Number(score)
let scoresInNum = Number(scores)

console.log(typeof (scoreInNum));    correct
console.log(typeof (scoresInNum));   correct

console.log(scores);     CORRECT

console.log(scoresInNum); //NaN -> Not a Number, but you have defined it as Number(), data type will be "Number" but when you print that we know that we have entered a string so the computers says it's NaN instead of giving the actual string value correct

//WHEN CONVERSING TO NUMBER FOLLWING HAPPENS
// "33" -> 33
// "33aa" -> NaN
// True -> 1
// False -> 0
// null -> 0
// undefined -> Nan

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //true

//In Boolean conversion
// 1 -> true
// "" -> false
// name -> true


