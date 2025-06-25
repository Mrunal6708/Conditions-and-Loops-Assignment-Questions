// A loop is a way to repeat a set of instructions again and again until a certain condition is met.

// Why Do We Need Loops?
// Loops help you:
// Avoid code repetition
// Perform tasks multiple times (e.g., processing lists, counting, user inputs)
// Automate repetitive logic
// Without loops, you would have to manually repeat code, which is inefficient and error-prone.

//Examples

/*
 Syntax:

   while (condition) {
    // code to execute
    }

    or

    do {
    // code to execute
    } while (condition);

    or

    for (initialization; condition; increment) {
    // code to be executed
    }

    or

    for (let element of array) {
    // code
    }

*/

  for( let i=1; i <=10 ; i++){
    console.log("Count: "+i)
  }

  let a =2;
  while (a <= 20){
  console.log("Count: " +a);
   a=a+2;
  }

let y= 5;
do{
    console.log("Count: "+y);
    y=y+5;
}while(y <= 25);

let fruits=["apple","banana","charry"];
for(let fruit of fruits){
    console.log(fruit);
}

let person = { name:"Raaj", age: 22};

for(let key in person){
    console.log(key+ ":" +person[key]);
}