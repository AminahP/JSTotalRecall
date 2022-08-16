// ---- LOOPS ---
/*
Remember: USE letwhen you initialize your for loops!

This is GOOD: for(let i = 0; i < 100; i++)

This is NO GOOD: for(i = 0; i < 100; i++)

*/
//               The basics
//Write a loop that will print out all the numbers from 0 to 10, inclusive

for(let i = 0; i <= 11 ; i++){
    console.log(i);
}
//Write a loop that will print out all the numbers from 10 up to and including 400
for(let i = 10; i < 401; i++){
    console.log(i)
}
//Write a loop that will print out every third number starting with 12 and going no higher than 4000
for(let i = 12; i <= 4000; i++){
  if(i % 3 === 0)
    console.log(i)
}

//             Get even
//Print out the numbers that are within the range of 1 - 100
for(let i = 1; i < 101; i++){
    if(i % 2 === 0)
      console.log(i + "<-- is an even number");
  } else{
console.log(i)
  }

//Adjust your code to add a message next to even numbers only that says: "<-- is an even number"


//       Give me Five
for(let i = 1; i<= 100; i++){
    if(i % 5 === 0){
        console.log("I found a" + i +  "High five !");
    }if(i% 3 === 0){
        console.log("I found a " + i+ ". Three is a crowd")
    }
}

//   SAVINGS ACCOUNT 
//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
//Check your work! Your bank_account should have $55 in it.


let bank_account = 0
for (let i = 0; i < 11; i++){
    bank_account = bank_account + i
}
console.log(bank_account);

/*You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.

 */

let bank_account = 0
for (let i = 0; i < 11; i++){
    bank_account = bank_account + i *2
}
console.log(bank_account);
bank_account = 0
for (let i = 0; i < 101; i++) {
  bank_account = bank_account += i * 2
}
console.log(bank_account);
