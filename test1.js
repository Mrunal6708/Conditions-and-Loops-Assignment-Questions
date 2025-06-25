//q1.What are conditional statements? Explain conditional statements with syntax and examples.
//-
/* Conditional statements are used in programming to make decisions based on certain conditions. 
 These conditions are typically boolean expressions (i.e., they evaluate to true or false). 
 Based on the result, different blocks of code can be executed.*/


 //if conditional 
 /*

 Syntax:
  if (condition){
    //code to run if condition is true
  }

 */

  //Example

  let age = 18;
  if(age >= 18){
    console.log("You are eligible to Vote")
  }
  
  
 //if , else conditional 
 /*

 Syntax:
  if (condition){
    //code to run if condition is true
  } else {
    //code to run else condition is false
   }

 */
  
   let x = 10;
   if( x % 2 === 0){
    console.log(x +" Number is even");
   } else {
    console.log(x +" Number is odd")
   }