//object in js
//1.object literal
// let person={
//     firstName:'John',
//     lastName:'Mukhwana',
//     age:20,
//     email:'jon@gmail.com',
//     hoppies:['music','dance']
// }
// let person2=new object();
// person2.firstName='jane';
// person2.lastName='doe';
// person2.age=20;
// person2.email='jane@gmail.com';



//array of objects
let persons=[

        {
    firstName:'John',
    lastName:'Mukhwana',
    age:20,
    email:'jon@gmail.com',
    hoppies:['music','dance']
        },
        {
    firstName:'jane',
    lastName:'doe',
    age:20,
    email:'jane@gmail.com',
    hoppies:['fishing','cookib']
        },
        {
        firstName:'jack',
        lastName:'khwana',
        age:2,
        email:'on@gmail.com',
        hoppies:['msic','ance']
        }
         
];
// for(let i=0;i<=persons.length;i++){
//     console.log(`my name is ${persons[i].firstName} `);

// }
// persons.forEach(
//     person=>{//defines an anonymous fuction tha will execute for each
//         console.log(`my name is, ${person.firstName}`);
//     }
// )
Object.keys(persons).map((key)=> {
   
    console.log(persons[key].firstName);
})
