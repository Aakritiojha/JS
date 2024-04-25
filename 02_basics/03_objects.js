//singleton object
//literals


//defining object
const jsUser = {
    name: "shanaya",
    age: 24,
    "email": 'a@Aho.com'
}

//accesing data from object
console.log(jsUser.age);
console.log(jsUser["age"]);
console.log(jsUser["email"]); //it can only be accessed this way



//special case when defining symbol
const mySym = Symbol("myKey") //bascially like primarykey

//accessing defined symbol in object
const newJsUser = {
    mySym: "myKey1", //wrongway, gives string type not symbol
    [mySym]: "myKey1" //rightway, gives symbol type
}
console.log(newJsUser.mySym); //wrong, although you get the value
console.log(newJsUser["mySym"]);
console.log(newJsUser[mySym]);



//freezing concept, you cannot change object value after that
jsUser.email = "h@chatgpt.com" //email changed
// Object.freeze(jsUser) //commented to make below code work
jsUser.email = "h@microsoft.com" //email not changed
console.log(jsUser);



//function concept
jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //string interpolation
}

console.log(jsUser.greeting()); //func is not executed, only reference
console.log(jsUser.greetingTwo());




