const arr1=[1,2,3,4,5]
const copyOfarr1=[...arr1,11,12,13,14,15]
console.log(copyOfarr1);

const person={
    fName:'john',
    lName:'mukhs',
    location:'new york'
}
let student={
    ...person,
    course:'software',
    university:'kyu',
    grade:'a'
};
console.log(student);
