let myArr = ['a', 'b','c' ,'d', 'e']
// let myArr1 = [a, b, c, d, e]

console.log(typeof myArr);
// console.log(typeof myArr1);

const myArr2 = [0, 1, 2, 3, 4, 5]
console.log(typeof myArr2);

//Arraymethods

myArr.push('f')
console.log(myArr);
myArr.pop()
console.log(myArr);
//these add and removes to the last


myArr.unshift('-a')
console.log(myArr);
myArr.shift()
console.log(myArr);
//these add and removes to the first

let joinedArr = myArr.join()
console.log(joinedArr);
console.log(typeof joinedArr);
//data same but no more array, it's a string


//slice and splice
console.log('1', myArr);

const sliceArr = myArr.slice(1,3)
console.log(sliceArr); //prints 1th and 2rd from array not 3rd
console.log(myArr); //original array remains same

const spliceArr = myArr.splice(1,3)
console.log(spliceArr); //prints 1st 2nd and 3rd item from array
console.log(myArr); //original array changed, it only contains items that are not on new defined variable on which splice is operated.