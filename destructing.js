// // Destructing an object
// const person={
//     name:'john bro',
//     age:25,
//     address:{
//         city:'New york',
//         country:'USA'
//     }
// }
// let {name,age,address:{city,country}}=person;
// console.log(`The city is,${city} with Object destructing`);

//Array destructing
const people= new Array('john','simon','wabuku','kachere',40);
let  [firstItem,secondItem,thirdItem, ...rest]=people;
console.log(...rest);