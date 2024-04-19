let name = "shanaya"
let age = 18

let info = `My name is ${name} and i am ${age} years old.`
console.log(info);
//while concatenaing instead of + use above approach

const gameName = new String('shanaya-dot-com')
//creating a new String object using the String constructor, String objects have some methods and properties that primitive strings don't.

console.log(gameName.charAt(2));

let indexOfFirstA = gameName.indexOf('a')
let indexOfSecondA = gameName.slice(indexOfFirstA+1).indexOf('a')
console.log(indexOfFirstA);
console.log(indexOfSecondA);

let removingHyphenWrong = gameName.replace('-', '')//this resulted in only removing first hyphen
let removingHyphen = gameName.replace(/-/g, '')
console.log(removingHyphen);

let subStringTest = gameName.substring(0,7) //doesnot take -ve
console.log(subStringTest);

let sliceTest = gameName.slice(-16,4) //also takes -ve
console.log(sliceTest);
