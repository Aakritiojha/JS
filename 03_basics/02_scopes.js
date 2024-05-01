//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "shanaya"

    function two(){
        const email = "one@two.com"
        console.log(username);
    }
    two()

    // console.log(email); email is defined under func two, cant be accessed outside of that function
    console.log(username);
}
one()

//similar scopr of ifelse

if(true){
    const name = "shanaya"
    if(name === "shanaya"){
        const age = 12
        console.log(`name is ${name} and age is ${age}`);
    }
    // console.log(age); called outside the scope
}
// console.log(name); called outsie the scope


//if a function called is done above function execution then it works.
//but if a function is stored in a variable and that variable is called before it's execution then it shows error.

//works

oneAdd(4)
function oneAdd(num){
    return num + 1
}


//wont work

// storingfunc(4) error
const storingfunc = function twoAdd(num){
    return num + 2
}

