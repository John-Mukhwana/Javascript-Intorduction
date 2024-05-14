/*for loop to print numbers from 1 to 10 */
var i=1;
var b=10;
for(i=1;i<=b;i++){
    console.log(i)
}

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