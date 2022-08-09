/*
JS TOTAL RECALL GROUP Aminah Pitt, Jule Berry, Naima Kearney, Courtney Moreland

  -----Q + A----

 How do we assign a value to a variable?

 How do we change the value of a variable?

 How do we assign an existing variable to a new variable?

 Remind me, what are declare, assign, and define?
 asign-
 define- determine the type of a variable
 declare- Giving the variable an initial  value

 What is pseudocoding and why should you do it? 
 Mapping out a design in plain english without any actual coding. 
 SHould be done to help you organize and map out your initial code

What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
We feel it should be 80% planning and 20% coding
*/

// ---- STRING ----

 let firstVariable = 'Hello World';
 firstVariable = 4;
 let secondVaribale = firstVariable;
 secondVariable = 'Good Morning';
 //console.log(firstVariable); 
 // firstVariable is 4
  let yourName = 'Aminah Pitt';
console.log('Hello, my name is' + yourName + '.')


// --- BOOLEAN----

const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');


// ---- THE FARM ----

let animal = 'pig';
if (animal === 'cow') {
    console.log('MOOOOOOO')
} else{
    console.log("HEY! You're not a cow")
}


// ---- DRIVERS ED ----
let personAge
if (personAge >= 16){
    console.log('Here are your keys')
} else (personAge < 16 ); {
    console.log("Sorry, you're too young.")
}

