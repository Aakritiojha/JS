function sayHi(){
    console.log('H');
    console.log('i');
}

// sayHi()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

// addTwoNumbers(1, 1)


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))