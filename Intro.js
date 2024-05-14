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
while(i<=b)