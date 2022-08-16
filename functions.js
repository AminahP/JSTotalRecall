// ---- Functions -----

// Print greeting 
const printGreeting = (name) => {
    return `Hello there, ${name}!`
}
console.log(printGreeting('Slimmer'));


// Print cool

const printCool = (name) => {
    return `${name} is cool`
}
console.log(printCool('Captain Reynolds'));

//calculate cube 
const calculateCube = (num) => {
    return num * num * num
}
console.log(calculateCube(5));

// Is Vowel
const isVowel = (char) => {
    if (char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u') {
      return true
    } else {
      return false
    }
  }
  console.log(isVowel("A"))
  console.log(isVowel("a"))
  console.log(isVowel("E"))
  console.log(isVowel("e"))
  console.log(isVowel("I"))
  console.log(isVowel("i"))
  console.log(isVowel("O"))
  console.log(isVowel("o"))
  console.log(isVowel("U"))
  console.log(isVowel("u"))
  console.log(isVowel("Z"))

  // Get Two Lengths
const getTwoLengths = (string1, string2) => {
    let lengthArr = [];
    lengthArr.push(string1.length, string2.length );
    return lengthArr
  }
  console.log(getTwoLengths('dog','fish'))

  // get multiple lengths

  const getMultipleLengths = (str) => {
    let arrofNums = [];
    for(let i = 0; i < str.length; i++){

    
   arrofNums.push(str.length [i]).length;
    return arrofNums}
  }
  console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


  // max of three
  const maxofThree = (num1, num2, num3) => {
    if(num1 === num2 && num2 === num3 && num1 === num3){
      return num1 
    } else if (num1 > num2 && num1 > num3){
      return num1
    } else if(num2 >= num1 && num2 >= num3){
      return num2
    }else {
      return num3
    }
  }

  //all nums equal
  console.log(maxOfThree(2, 2, 2));
  // return num1
  console.log(maxOfThree(9, 7, 5));
  // should return num2
  console.log(maxOfThree(4, 8, 3));
  //return num3
  console.log(maxOfThree(3, 4, 2));
  // return one of the larger nums
  console.log(maxOfThree(2, 3, 3));


  // Print Longest Word
  const printLongestWord = (stringArray) => {
    let longestWord = '';
    let longestNum = 0;
    for(let i = 0; i < stringArray.length; i++){
      let currentLength = stringArray[i].length;
    if (currentLength > longestNum) {
      longestWord = stringArray[i];
      longestNum = currentLength;
    }
    }
    return longestWord;
  }
  console.log(printLongestWord(["BoJack", "Princess", " Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));