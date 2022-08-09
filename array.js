//JS TOTAL RECALL GROUP Aminah Pitt, Jule Berry, Naima Kearney, Courtney Moreland
 
/*
// ---- ARRAYS & CONTROL FLOW----
What are the things in an array called? 
-Elements
Do Arrays guarantee those things will be in order?
-No
What real-life thing could you model with an array?
-A list of students
*/


// ----- Easy Does It -----
 // create an array that contains 3 quotes and store it in a variable called quotes

 const quotes = [ 
    'Time is Money',
    'I came, I saw, I conquered.',
    'Practice makes perfect.'
 ]


 // Accesing elements 
 const randomThings = [ 1, 10, "Hello, true"]
 console.log(randomThings[0]);
 randomThings[2] = 'World';
 console.log(randomThings[2]);
 console.log(randomThings);

 // Change values
 const ourClass = ["Salty", "Zoom","Sardine", "Slack", "Github"]
ourClass[2];
ourClass[4] = 'Octocat';
ourClass.push('Cloud City');
console.log(ourClass);

// Mix it up

const myArray = [5, 10, 500, 20]
myArray.push('Aegon');
myArray.push('Harry Potter');
myArray.shift();
myArray.unshift('Bob Marley');

myArray.pop();
console.log(myArray);
myArray.reverse();
console.log(myArray);

// BIGGIE SMALLS
let biggieSmalls = 7;
if(biggieSmalls < 100){
    console.log('little number')
}else if (biggieSmalls >= 100){
    console.log('big number')
}

// Monkey in the middle 
let 