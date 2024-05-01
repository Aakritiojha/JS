//this
//this specifies context.

const user = {
    username: "shanaya",
    userwelcome: function(){
        // console.log(`${username} welcome to the team`); error
        console.log(`${this.username} welcome to the team`);
        console.log(this);
    }
}

user.userwelcome()

// user.username = "sam"
// user.userwelcome() //context is changed to sam

console.log(this); //if no defination of username outside the object the returns {}


//+++++++++++++but this cannot be used in functions like so++++++++//


// function error(){
//     let username = "shanaya"
//     console.log(username); //works
//     console.log(this.username); //undefined
// }

// error()


//ARROW
//remove func and place arrow between () and {}, it's now arrow func

const arrowFunc = () => {
    let username = "shanaya"
    console.log(this.username); //undefined
}

//normal arrowfunc

const addTwo = (num1, num2) =>{
    return num1 + num2
}

console.log(addTwo(5, 4))


//implicit arrow function
//you do not have to return if you have not used {}

const addTwoImplicit = (num1, num2) => (num1 + num2)
console.log(addTwoImplicit(5, 4))
