//immediately invoked function expression


//normal method
// function myFunc(){
//     console.log(`shanaya`)
// }
// myFunc()


//iife

(function myFunciife(){
    console.log(`shanaya`);
})();
//iife should always be ended with ;
//now it is immediatedly called  () ()
//it is used beacuse somethings problem occurs because of global scope pollution, so to remove that pollution, it is used.


//also implemented by arrow func

(() => {
    console.log(`shanaya`);
})()