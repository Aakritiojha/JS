let myDate = new Date() //creates a new Date object. A Date object provides various methods to access and manipulate date and time information.
console.log(1., myDate);

let myDateNew = Date.now() //It doesn't create a full-fledged Date object. Instead, it provides a raw number representing the time in milliseconds since a specific point in history(1970 jan1)
console.log(2., myDateNew);



//working with myDate
console.log(3., myDate.getDay() + 1);
console.log(4., myDate.toString());
console.log(5., myDate.toLocaleString());
console.log(6., myDate.toLocaleDateString());
console.log(7., typeof myDate);


// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})