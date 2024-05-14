/*array is a special variable that can hold many values ata a tie*/
//creating an array 
//1.using array literal
let fruits=['apple','banana','mango','orange','pineaplle'];
//2.using array prototype(new keyword/constructor)
let marks=new Array(10,20,30,40,50);

console.log(marks[3]);
//array properties
//.length
console.log(fruits.length);
console.log(marks.length);
//array methods
//1.pop-removes last element in ana array an returns that element
console.log(fruits.pop());
//2,push adds one more elemnt to the end of an array and retursn the new length of the array
console.log(fruits.push("Quava"));
//3,shift removes first element from ana array and returns that element 
console.log(fruits.shift());
//other methods 
let position=fruits.indexOf("mango");
console.log(position);
//lastIndexOf
///includes
let  isInArray=fruits.includes("PINAPLE");
console.log(isInArray);
//maps
let numbers=[1,2,3,4,5];
let number=[10,20,30,40,50];
let incrementby3=numbers.map((number)=>{
    return number+3;
});
console.log(incrementby3);
//filter -creates new array withh all elements that passes test implemented provided by provided  fuction
