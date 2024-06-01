// Important methods and notes

// Ways to sum entire array
function forEachSum(array){
  array.forEach(item => sum += item)  // For each item in the array, add it to the sum
  alert(sum);
  return sum;
}

function reduceSum(array){
  let sum = array.reduce((sum, arrayValue) => sum + arrayValue, 0);  // acc = accumulator aka the total and c is the array item.  The comma 0 is to start the acc at that number.
  alert(sum);
  return sum;
}

//Square an ARRAY
function squareIt(array){
  let answerArray = array.map(num => num*num);
  return answerArray;
}

// Reverse a string
function unoReverse(string){
  let reversal = string.split('').reverse().join('');
  return reversal;
}

// Turn string into array and then capitalize the first letter
let string = 'wow lets play'
let arrayString = string.split(' ');
let newArray = [];
for(let i = 0; i < arrayString.length; i++){
  let change = arrayString[i][0].toUpperCase() + arrayString[i].substring(1);
  newArray.push(change);
}

// KATA 6  Find the element that appears an odd amount of times in the array
function findOdd(A) {
  //Handle cases where A.length = 1
  if(A.length == 1){
    return A[0];
  }
  
  let count = 0;
  //Assign currentInt to i
  for(let i = 0; i < A.length; i++){
    let currentInt = A[i];
    //If currentInt == A[j] increment count
    for(let j = 0; j < A.length; j++){
      if(currentInt == A[j]){
        count = count + 1;
      }
    }
    //Check if count is odd for answer or else continue looping
    if(count % 2 != 0){
      return currentInt;
    }
  }
  
}

//DNA KATA 7
let dna = 'GTAT';

function dnaStrand(dna){
  //Turn string into an array
  let array = dna.split('');
  //Loop array and change letters
  for(let i = 0; i < array.length; i++){
    console.log(array[i]);

    if(array[i] === 'A'){
      array[i] = 'T';
    } else if(array[i] === 'T'){
      array[i] = 'A';
    } else if(array[i] === 'C'){
      array[i] = 'G';
    } else if(array[i] === 'G'){
      array[i] = 'C';
    }
  }
  //Turn array into string
  array = array.join('');
  
  //Return answer
  return array;
}


// KYU 6 Add 'likes this' or like this to the array of names.
function likes(names) {
  if(names.length === 0) return "no one likes this";
  if(names.length === 1) return names[0] + " likes this";
  if(names.length === 2) return names[0] + " and " + names[1] + " like this";
  if(names.length === 3) return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
}


// KYU 7 Get shortest word from the string sentence and return it's length
function findShort(s){
  let stringArray = s.split(' '); //Splits elements by the space between words
  let shortest = stringArray[0];
  
  for(let i = 1; i < stringArray.length; i++){
    if(stringArray[i].length < shortest.length){
      shortest = stringArray[i];
    }
  }
  
  return shortest.length;
  
}


// KYU 7 Count x's and o's in string

function XO(str) {
let answerX = 0;
let answerO = 0;

for(let i = 0; i < str.length; i++){
  if(str[i].toLowerCase().includes('x')){
    answerX = answerX + 1;
  } else if (str[i].toLowerCase().includes('o')){
    answerO = answerO + 1;
  } else {
    continue;
  }
}

if(answerX == answerO){
  return true;
} else if(answerX == 0 && answerO == 0){
  return true;
} else {
  return false;
}
}

// KYU 6  Given two arrays.  If an element from array B is in array A, remove that element from the array.  Return the array with values not included with B

function arrayDiff(a, b) {
  
  if(b.length == 0 || a.length == 0){
    return a;
  }
  
  let answer = [];
  
  for(let i = 0; i < a.length; i++){

      if(!b.includes(a[i])){
        answer.push(a[i]);
      }
  } 
  return answer;
  
}

// KYU 7 Two To One Add strings together and remove duplicates then sort them into one string in an array;
function longest(s1, s2) {
  
  let fullList = s1.concat(s2); //Add lists together
  let newFullList = fullList.split(''); //Split string into individual letters
  
  let answerSet = new Set(newFullList); // Remove duplicates
  let answer = [];
  
  answer = Array.from(answerSet); //Push elements from set to array
  answer.sort(); //Sort array
  
  
  return answer.join(''); //Join elements and remove commas

}

// KYU 8 Turn an integer into an array in reverse order
function digitize(n) {

  let answer = String(n).split('').map(Number).reverse();  
  return answer;

}


// KYU 7  Does the string have duplicate characters?

function isIsogram(str){
  
  const answer = new Set(str.toLowerCase());  // SETS MUST HAVE UNIQUE VALUES;
  
  if(answer.size == str.length){
    return true;
  } else {
    return false;
  }
}



// KYU 7 Get middle characters from string.  If string is odd, give middle character.  If string is even give both middle characters
function getMiddle(s)
{
  //Code goes here!
  let answer = '';
  
  if(s.length == 1 || s.length == 2){
    return s;
  }
  
  if(s.length % 2 == 0){
    answer += s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)];
    return answer;
  } else if(s.length % 2 != 0){
    answer += s[Math.floor(s.length / 2)];
    return answer;
  }
  
}




// KYU 8: String Repeat Write a function that accepts an integer n and a string s as parameters, 
// and returns a string of s repeated exactly n times. 
function repeatStr (n, s) {
    let str="";
    for(var i=0; i < n; i++){
      str += s;
    }
    return str;
  }

// KYU 7: Remove vowels from string
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, ""); //  (//): pattern ([]): tells to match any character in the set (g): Find all matches (i): case insensitive
  }

//   let words = 'I am a jr. dev.  Are you a jr. dev?';
// console.log(words.replaceAll('jr. dev', 'software engineer'));


// KYU 8: Remove first and last letter of string

  function removeChar(str){
    
     let answer = "";

     for (let i = 1; i < str.length-1; i++) {
       answer += str[i];
     }
   
     return answer;
   };

// KYU 7: Count amount of vowels in string
function getCount(str) {
  
    let count = 0;

    for(let i = 0; i < str.length; i++){
      if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
        count = count + 1;
      } else {
        continue;
      }
    }
    return count;
  }
   
// KYU 8 Complete the square sum function so that it squares each number passed into it and then sums the results together. 
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9

function squareSum(numbers){
  let sum = 0;
  
  for(let i = 0; i < numbers.length; i++){
    numbers[i] = numbers[i] * numbers[i];
    sum = sum + numbers[i];
  }
  return sum;
}

// KYU 8 Find smallest number in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    
    let answer = args[0];
    
    for(let i = 0; i < args.length; i++){
      if(args[i] < answer){
        answer = args[i];
      }
    }
    return answer;
  }
}

// KYU 8 Sum all from 1 - N
function summation(num) {

  let sum = 0;

  for(let i = 1; i <= num; i++){
    sum = sum + i;
  }

  return sum;
}

// KYU 7 Square every digit
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
function squareDigits(num){
  
  
  let numString = num.toString(); //Make integer into a string
  let answerString = "";  //Create empty string to add numbers to that will be converted to Number at the end.

  // Use charAt to access each digit.  Make that digit into a number again and square it.
  for(let i = 0; i < numString.length; i++){
    let x = Number(numString.charAt(i));  //Convert the string number into a number to be squared.
    x = x * x;
    answerString += x.toString();  // Make number into string to concatenate
  }
 
  return Number(answerString);   // Convert the string back into a number
}

// KYU 7  Get highest and lowest numbers out of the STRING
function highAndLow(numbers){
  
  // First turn string into an array by using the space pattern (whatever is separating the strings)
  let numArray = numbers.split(" "); 
  
  // Assign high and low to first element in array
  let low = Number(numArray[0]); // CONVERT THE STRING TO NUMBER FIRST
  let high = Number(numArray[0]);
  
  for(let i = 0; i < numArray.length; i++){
    
    if(Number(numArray[i]) > high){  // Make sure to CONVERT THE STRING TO A NUMBER
      high = Number(numArray[i]);
    }
    
    
    if(Number(numArray[i]) < low){
      low = Number(numArray[i]);
    }
    
  }
  
  return high + " " + low;
  
  }
  

  // KYU 7:  Take an array of strings and numbers and filter out all strings.  Return a new array with only the integers
  function filter_list(l) {
    // Return a new array with the strings filtered out
    let answer = [];
    
    for(let i = 0; i < l.length; i++){
      
      if(typeof l[i] === "number"){
        answer.push(l[i]);
      }
      
    }
    
    return answer;
  }


  // KYU 7: Given an integer, return true if it is a perfect square or false if it is not.  (n = 4 (2 * 2) == True  n = 26 == False)
  var isSquare = function(n){
  
    let check = Math.sqrt(n);
    
    if((check.toFixed(0) * check.toFixed(0) === n)){
      return true;
    }
    
    return false; // fix me
  }

  // KYU 7: Combine each array element with the previous then return the new array

  function spacey(array) {
    let answer = [array[0]];
    
    if(array.length <= 1){
      return array;
    }
    
    for(let i = 1; i < array.length; i++){
      array[i] = array[i - 1] + array[i];
      answer.push(array[i]);
    }
    
    return answer;
  }


  // KYU 8: Remove a letter from a string
  function removeLetter(string){
    let answer = string.replace(/[!]/gi, "");
    return answer;
  }

  //Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

  function sumIt(list){
    let sum = 0;
    let x;
    for(let i = 0; i < list.length; i++){
        x = Number(list[i]);
        sum = sum + x;
    }
    return sum;
  }  

//(26) Kyu 6: Counting Duplicates
//Count the number of Duplicates: Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
//"aabBcd" returns 2 (a & b have duplicates)  "abcde" returns 0
function duplicateCount(text){
  //Split and sort text into an array
  let x = text.toLowerCase().split('').sort();
  
  //Track total
  let total = 0;
  
  //Loop sorted array
  for(let i = 0; i < x.length; i++){
    if(x[i] == x[i+1] && x[i] != x[i-1]){     //Since array is sorted, if element after index is same but element prior to index isn't, increment the total
      total = total + 1;
    }
  }
  return total;
}

//(27) Kyu 6: Only Duplicates
//Given a string, remove any characters that are unique from the string.   "abccdefee" -> "cceee"
function onlyDuplicates(str) {
  //Turn string into an array 
  let x = str.split('');
  
  //Array to push duplicates into
  let answer = [];
  
  //Loop array
  for(let i = 0; i < x.length; i++){
    let count = 0; //Track number of times element is seen

    for(let j = 0; j < x.length; j++){  //Starts from beginning of string again incrementing the count
      if(x[i] == x[j]){
        count = count + 1;
      }
    }
    if(count > 1){  //Push elements into answer array
      answer.push(x[i]);
    }
  }

  return answer.join(''); //Join array for answer
}
