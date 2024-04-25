//how to combine array
const names = ["shanaya", "june", "tuesday"]
const places = ["greece", "maldives", "newyork"]

// names.push(places)
// console.log(names); //array inside array
// console.log(names[3][2]);


//correct method but using spread is preferred
const allData = names.concat(places)
console.log(allData);


//the correct method -> using spread

const allDataCorrect = [...names, ...places]
console.log(allDataCorrect);


//how to flaten a nested array
const nestedArray = [1, 2, [3, 4, [5, 6], 7], 8]
const flattenedArray = nestedArray.flat(Infinity)
console.log(flattenedArray);



console.log(Array.isArray("Sheena")); //false -> "sheena" is not an array
console.log(Array.from("sheena")); //forms array of sheena
console.log(Array.from({name: "sheena"})); //gives empty array bc it cannot conver this directly to array, you have to specify either key or value to be converted

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));