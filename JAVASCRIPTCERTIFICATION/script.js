
// when reassigning variables don't use the let keyword
// camel case is when a variable is more than one word,so you capitalise the otherword 
 let secondCharacter="Test";
//  trying to learn how to asisgn variables
secondCharacter=character;
// another learning instance
let profession= "teacher";
let age;
console.log(profession);
console.log(age);
// count variable
let count1=8;
// addition on console
console.log(count+1);
// arrays in programming
let rows=["Naomi","Quincy","CamperChan"];
console.log(rows[0]);
// updating arrays in console iscalled mutation
// when to mutate an array and when not to
// learning and creating is diffrent, allocate 1hr to each cause

rows[2]=10;
console.log(rows);

// array.length returns the number of elements in an array but you have to sutract one

rows[rows.length-1]
// learning arrays
let cities=["London","New York","Mumbai"];
console.log(cities);
cities[cities.length-1]= "Mexico City";
console.log(cities);

// methods in javascript
// .push()method adds value/elements to an array
rows.push("freeCodeCamp");
console.log(rows);


// pop removes the last element from an array
// .pop() returns the value that was removed from the array

let popped =rows.pop();
console.log(popped);

let pushed =rows.push();
console.log(pushed);
// let(allows to be changed) vs const(constant throughout)

// building pyramid generator

const character = "#";
const count2 = 8;
const rows = [];

// for loop
for (let i = 0; i < count; i = i + 1) {
    rows.push(i);
  }
let result="";
console.log(result);

for( const row of rows){

}
// concatenation is adding strings to string
for (const row of rows) {
result=result+"row";
}
// next line"\n"
// repeat method
for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i))
  }
//   functions are reusable codes
function padRow(){

}
function addTwoNumbers(sum){
    const sum= 5+10;
    return sum;
}

function addTwoNumbers(){
const sum =addTwoNumbers(5,10);
console.log(sum);
}
// the correct code
function addTwoNumbers(a, b) {
    return a + b;
}
let sum = addTwoNumbers(5, 10);
console.log(sum);


function padRow(name) {
    return name="character"+name;
  }
  function padRow(name) {
    return character+name;
  }
//   first 100 lines of code
function padRow(name) {
    const test="Testing"

    return character + name;
  }

// programming can be intimidating

