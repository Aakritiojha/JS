// types are primitive and nonprimitive

// primitives are those which when called returned the copy of the value called, and all the changes are made on the copy NOT the original value

// 7 types: number, null, undefined, boolean, bigInt, symbol, string

const score = 100
//you don not need to define the datatype in js, eg: number(100) it is dynamically written

const score1 = 100.2
//also no need to define int float etc, they all are just numbers.

const isSignedIn = true
//boolean

const tempToday = null
//gives empty and not 0, helpful is such case bc 0 is also a valid value in case of temperatures.

const userStatus;
//wrong bc const means basically you can't change them again, and we are providing undefined in above which basically means that currently we do not have any data to add but in future we'll add something in it
let userStatus1;
//or
let userStatus2 = undefined

const id = Symbol("123");
//uniquely defines "id" (like primary key ig, further to learn)
const id1 = Symbol("123")
//even though we have provided the same primary key, they wont be equal
console.log(id == id1);
//false, proving they wont be equal

//const bigIntNum = 76426762n
//if n at last it will be bigInt, no mater the size of number


//NONPRIMITIVES
//they are those which when called, the actually memory reference will be provided and the changes will be in the actual value
//3 types: array, object, function

const goals = ["personal", "financial", "spiritual"];
//array denied by []

const myObj = {
    name: "shanaya",
    age: 18
}
//object defined by {}

const myFunc = function(){
    console.log("heyy");
}
//function deined by function(){}


//FINALLY
//to find data type of any data we can use "typeof" fucntion



console.log(typeof score);


//+++++++++++++++++++++++++++++++
//STACK AND HEAP MEMORY

//STACK is used on primitive data types, which when called, made cahnges to, the changes are made on the copy and not actual.

let user1Name = "Shanaya"
let user2Name = user1Name
user2Name = "Anannya"

console.log(user2Name);
//results in Anannya

console.log(user1Name);
//results in Shanaya
//as the change was made in the copy of user1Name, original user1Name is the same


//HEAP is used on non primitive daya types, which when called, made changes to, the changes are made on the actual reference, no copy is made
//basically it provides reference to the actual data and not copy

let user1info = {
    email: "hello@google.com",
    number: 787888

}
console.log(user1info);


let user2info = user1info

user2info.email = "hi@google.com"

console.log(user1info);
//the email of user1info has been changed to hi@google.com as the changes were made by referencing to the actual data

