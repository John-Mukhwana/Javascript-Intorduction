/*This is My Introduction to javascript*/
//Variables declaration and assigning
var firstName="John";
var lastName="Mukhwana";
let fullName=firstName +  lastName;
console.log(fullName)
/*Control Structures*/
//var Name = prompt("ENTER NUMBER A:");
var a=50;
var b=30;
var c=60;
if (a<b){
    console.log("a is greater than b");
}
/*else{
    console.log("b is greater than a")
}*/
else if(a>c){
    console.log("a is greater than b and greater than c")
}
else{
    console.log("a is greater than b but less than c")
}
/*for loop to print numbers from 1 to 10 */
var i=1;
var b=10;
/*for(i=1;i<=b;i++){
    console.log(i)
}*/
/*While loop*/

/*while(i<=b){
   
    console.log(i)
    i++
}
/*do while loop*/
do{
    console.log(i)
    i++
}
while(i<=b);
/*dates in javascript*/
let now= new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());

/*MATHS IN JS*/
//Math Objects.
console.log(Math.PI);
//Mathe Methods
console.log(Math.sqrt(3));
console.log(Math.pow(2,3));
console.log(Math.floor(10.4));
console.log(Math.ceil(10.5));
console.log(Math.max(10,20,40,80));
console.log(Math.min(5,20,10,69,80,70));
console.log(Math.random());
console.log(Math.sin(0.0482));
console.log(Math.cos(0.0482));
console.log(Math.tan(0.482));

//ARRAYS IN JAVASCRIPT.
/*let fruits=['apple','banana','mango','orange','grapes' ];
let people=[
    {
        Jna:'john Doe',
        age:30,
    },

    {
       loactio:'Busia',
    }
];*/
//for in Loop with objects
let person={
    jina:'john ',
    age:'30',
    city:'New city'
};
for(let key in person){// key represents each property /key ofthe object during each literation
  
    console.log(key + ':', person[key]);
};

/*Using for loop to print shapes and numbers*/
