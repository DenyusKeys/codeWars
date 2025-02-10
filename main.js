// Important methods

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

//Capitalize the first letter of a string
let string = 'wow lets play'
let newString = string[0][0].toUpperCase() + string.slice(1);
return newString;

//67 (Kyu 6): Highest Rank Number in an Array
//Complete the method which returns the number which is most frequent in the given input array. 
// If there is a tie for most frequent number, return the largest number among them.
//[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]  -->  12 (12 showed 3 times so did 10.  12 > 10).
function highestRank(arr){
  //Set count 
  let highest = 0;
  let highCount = 0;
  
  //Loop arrays
  for(let i = 0; i < arr.length; i++){
    //Track occurrence of current element
    let currentCount = 0;
    
    //Loop array and compare it to current element arr[i]
    for(let j = 0; j < arr.length; j++){
      if(arr[i] == arr[j]){
        currentCount = currentCount + 1;
      }
    }
    
    //If current element has more occurrences than previous, update value.
    if(currentCount > highCount){
      highCount = currentCount;
      highest = arr[i];
    } 
    //If occurrences are equal, choose the greater value for highest variable.
    else if(currentCount == highCount){
      if(highest < arr[i]){
        highest = arr[i];
         currentCount = 1;
      }
    }
  }
  return highest;
}

//66 (Kyu 7): Count the Digit
//Given an integer, square all numbers from 0 - N.  Count number of occurrences of D.  
//n = 10, d = 0 => (0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100)  ANSWER = 3
function nbDig(n, d) {
    
  //Keep count of how many integers contain d
  let count = 0; 
  
  //loop to get all integers
  for(let i = 0; i <= n; i++){
    let num = i*i;
    let stringNum = num.toString();
    //Loop through each integer to count occurences of d
    for(let i = 0; i < stringNum.length; i++){
      if(stringNum[i].includes(d)){
        count = count + 1;
      }
    }
  } 
  return count;
}


//65 (Kyu 6): Buying a car
function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  
  //If old car is bigger than new car. Return 0 months and difference of old - new
  if(startPriceOld >= startPriceNew){
    return [0, (startPriceOld - startPriceNew)];
  }
  
  //Track amount of months
  let months = 0; 
  
  //variables
  let oldCar = startPriceOld;
  let newCar = startPriceNew;
  let percentLoss = percentLossByMonth * 0.01;
  let savings = 0;
  
  //old car decreases 1.5% a month and an extra 0.5% every 2 months
  while( (oldCar + savings) < newCar){
    months++; //increment the month
    savings = savings + savingperMonth;
    //Every second month, increment by 0.5%
    if(months % 2 == 0){
      percentLoss = percentLoss + 0.005;
    }
    
    //Calculate new values
    oldCar = oldCar - (oldCar * percentLoss);
    newCar = newCar - (newCar * percentLoss);

    //Check if  oldCar + savings is greater than newCar
    if((oldCar + savings) >= newCar){
     let x = (oldCar + savings) - newCar;
     let y = x % 1; //Pulls the decimal off the end to compare floor/ceil
      
      if(y < 0.5){
        return [months, Math.floor(((oldCar + savings) - newCar))]  //round down 
      } else {
        return [months, Math.ceil(((oldCar + savings) - newCar))] //round up
      }
    }   
  }
}

//64 (Kyu 6): The Vowel Code
function encode(string) {
  let answer = '';

  //Loop the string and push correct numbers to string based on vowels
  for(let i = 0; i < string.length; i++){
    if(string[i] == 'a'){
      answer += 1;
    }
    else if(string[i] == 'e'){
      answer += 2;
    }
    else if(string[i] == 'i'){
      answer += 3;
    }
    else if(string[i] == 'o'){
      answer += 4;
    }
    else if(string[i] == 'u'){
      answer += 5;
    } else {
      answer += string[i]; //if letter is not a vowel, push the letter
    }
  }
  return answer;
}

function decode(string) {
  let answer = '';
    //Loop the string and push correct letters to string based on numbers
  for(let i = 0; i < string.length; i++){
    if(string[i] == '1'){
      answer += 'a';
    }
    else if(string[i] == '2'){
      answer += 'e';
    }
    else if(string[i] == '3'){
      answer += 'i';
    }
    else if(string[i] == '4'){
      answer += 'o';
    }
    else if(string[i] == '5'){
      answer += 'u';
    } else {
      answer += string[i]; //if letter is not a number, push the letter
    }
  }
  return answer;
}

//63 (Kyu 6): Title Case
//('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
//('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
//Given two arrays.  If the word is found in minorWords, dont capitalize the first letter. 
//If it is the first letter of the array or not in minorWords, capitalize the first letter of the array
function titleCase(title, minorWords) {
  
  //If title is empty return ''
  if(title.length < 1){  
    return ''
  }
  
  //Answer array to push elements into
  let answer = [];  
  
  //splits title into lowercase array for easier comparing
  let x = title.toLowerCase().split(' '); 
  
  //If minorWords exists, make it into an array of words.  If not, it is an empty array
  let minor;
  if(minorWords){  // Check if `minorWords` is provided (i.e., it is not `null`, `undefined`, or another "falsy" value like an empty string).
    minor = minorWords.toLowerCase().split(' ');
  } else {
    minor = [];
  }
  
   
//Loop Title Array of Words
  for(let i = 0; i < x.length; i++){
    let word = x[i];  //Take word from title
    
    //First word is always capitalized OR if the word is not in minorWords, capitalize the first letter
    if(i === 0 || !minor.includes(word)){  
      answer.push(word[0].toUpperCase() + word.slice(1)); //Make first letter capital and plug the rest
    } else {
      answer.push(word);  //If word is included in minorWords, just push the word.
    }
  }
  return answer.join(' ');
}


//62 (Kyu 6): Given a list, calculate the sum of the list as it is reduced to zero elements and push them into an array.
// ls = [1, 2, 3, 4, 5, 6]  -> [21, 20, 18, 15, 11, 6, 0]
function partsSums(ls) {
  //Create answer array to push sums into
   let answer = [];
   let listLength = ls.length;
   let total = ls.reduce((sum, element) => sum + element, 0); //Track total sum to push into answer
   answer.push(total); //Push full ls sum into answer array
  
  
  //If list has no elements
  if(listLength < 1){
    answer = [0];
    return answer;
  }
  
  //Loop the original list and subtract each element from total and pushing them
  for(let i = 0; i < listLength; i++){   
    total -= ls[i];   
    answer.push(total);
  }
  
  return answer;
}

// 61 (Kyu 6): Equal Sides of an Array
function findEvenIndex(arr){
  //Variables to compare sums
  let leftSide = 0;
  let rightSide = 0;
  
  //Loop original array and compare both sides using the sum function
  for(let i = 0; i < arr.length; i++){
    
    if(i == 0){
      leftSide = 0;  //index 0 will always equal 0 since nothing is to the left
      rightSide = sum(arr.slice(i+1)) //Grabs all elements after current index and sums them.
      console.log('Left=' + leftSide + '  Right=' + rightSide);
      if(leftSide == rightSide){
        return i;
      }
    } else {
      leftSide = sum(arr.slice(0, i)); //Grab all elements from 0 - index and sum them
      rightSide = sum(arr.slice(i+1)); //Grab elements from index+1 - end and sum them
      console.log('Left=' + leftSide + '  Right=' + rightSide);
      if(leftSide == rightSide){
        return i;
      }
    }
    
    if(i+1 == arr.length && (leftSide != rightSide)){  //If they never equal eachother, return -1
      return -1
    }
  }
}
  //Helper Sum function 
  function sum(list){
    let sum = 0;
    for(let i = 0; i < list.length; i++){
      sum = sum + list[i];
    }
    return sum;
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

//Kyu 7: Alternate Capitalization
//Given a lowercase string.  Capitalize all even indexes, then all indexes and return the two strings as an array
//capitalize("abcdef") = ['AbCdEf', 'aBcDeF']
function capitalize(s){
  
  
  let answer = [];
  
  
  let word1 = '';
  let word2 = '';
  
  
  for(let i = 0; i < s.length; i++){
    if(i == 0 || i % 2 == 0){
      word1 += s[i].toUpperCase();
    } else {
      word1 += s[i];
    }
  }
  
  for(let i = 0; i < s.length; i++){
    if(i == 1 || i % 2 != 0){
      word2 += s[i].toUpperCase();
    } else {
      word2 += s[i];
    }
  }
  
  answer.push(word1);
  answer.push(word2);
  
  return answer;
};

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
  //Make string into array
  let x = str.split('');
  
  //New array to push letters into
  let answer = [];
  
  //Loop array
  for(let i = 0; i < x.length; i++){
    let count = 0;
    
    //Loop array to compare i to j
    for(let j = 0; j < x.length; j++){
      if(x[i] == x[j]){
        count = count + 1;
      }
    }
    if(count > 1){  //Must be 2 at least to account for looping over the same element the first time
      answer.push(x[i]); //Push duplicate into the answer array
    }    
  }
  return answer.join(''); // Join the array together into a string
}


//(28) Kyu 6: Take a Ten Minute Walk
//Get an array of directions.  If the directions are longer than 10 or they don't bring you back to the start return false.  
function isValidWalk(walk) {
  
  //If array isn't length 10 it's automatically false
  if(walk.length != 10){
    return false;
  }

  //Track n, s, e, w
  let n = 0;
  let s = 0;
  let w = 0; 
  let e = 0;
  
  //loop array to count directions
  for(let i = 0; i < walk.length; i++){
    if(walk[i] == 'n'){
      n = n + 1;
    } else if(walk[i] == 'e'){
      e = e + 1;
    } else if(walk[i] == 's'){
      s = s + 1;
    } else if(walk[i] == 'w'){
      w = w + 1;
    }
  }
  
  //Compare directions
  if(n == s && e == w){
    return true;
  } else {
    return false;
  }
  
}

//(29) Kyu 6: Your order, please
// Array of strings that contain a number which represents where they should be placed in an array.
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
function order(words){
  //Split the array
  let x = words.split(' ');
  
  //Push words into array
  let answer = [];
  
  //Loop x array
  for(let i = 0; i <= x.length; i++){     //Uses index number as key to check for in words
    for(let j = 0; j < x.length; j++){    //If index number is in word, it will push that word to the array.
      if(x[j].indexOf(i) >= 0){           //Index goes in order so each number will be found in a word and pushed
        answer.push(x[j]);
      }
    }
  }
  return answer.join(' ');
}

//(30) Kyu 7: Given an array with pairs of ages and handicap, determine if they are a senior or open player based on Age >= 55 and Handicap > 7
// Example: [[18, 20], [45, 2], [61, 12]]  --> ["Open", "Open", "Senior"]
function openOrSenior(data){
  //Create array for answer
  let answer = [];
  
  //Loop data to create conditionals for open vs senior
  for(let i = 0; i < data.length; i++){
    //Check values then push() to add to array
    if(data[i][0] >= 55 && data[i][1] > 7){
      answer.push("Senior");
    } else {
      answer.push("Open");
    }
  }
  //Return the answer array
  return answer;
}

//(31) Kyu 6: Given a string, create a new string using '(' if the letter occurs ONLY once and ')' if it occurs twice.

function duplicateEncode(word){
    //make all chars lowercase
    let xword = word.toLowerCase();
  
    //Keep count of times a character shows up
    let answer = '';
    for(let i = 0; i < xword.length; i++){
      let count = 0;  //Track instances of char
      for(let j = 0; j < xword.length; j++){
        if(xword[j] == xword[i]){  //Increment the count if char is the same
          count = count + 1;
        }
      }
    if(count > 1){
       answer += ')';
    } else if (count <= 1){
        answer += '(';
      }
    }
    return answer;
}

//(32) Kyu 6: "Unique In Order" Take a string or array and return a list of items, keeping the order, that doesn't contain duplicates next to eachother
// 'AAAABBBCCDAABBB' == ['A', 'B', 'C', 'D', 'A', 'B']   || [1,2,2,3,3] == [1,2,3]
var uniqueInOrder=function(iterable){
  //Create answer array
  let answer = [];
  //remember iterable can be a string or an array
  if(typeof iterable == 'object'){
    //it's an array
    for(let i = 0; i < iterable.length; i++){    //For loop is checking the next index for a match, if it doesn't match, we can push the current index to the answer array
      if(iterable[i] != iterable[i + 1]){        
        answer.push(iterable[i]);
      }
    }
    return answer;
  } else {
    //it's a string, convert to array
    let x = iterable.split('');
    for(let i = 0; i < x.length; i++){
      if(x[i] != x[i + 1]){
        answer.push(x[i]);
      }
    }
    return answer; 
  }     
}

//(33) Kyu 6: Detect Pangram
//Given a string, detect whether or not it is a pangram(includes every letter of alphabet). Return True if it is, False if not. Ignore numbers and punctuation.
function isPangram(string){
  
  //Create array of every letter
  let alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'];
  
  //Make the string a lowercase array
  let x = string.toLowerCase().split('');
  
  //Iterate alphabet for each letter of string
  for(let i = 0; i < alphabet.length; i++){
    
    //If the string includes the alphabet letter or punctuation/spaces, or numbers, continue.
    if(x.includes(alphabet[i]) || x[i] == ',' || x[i] == "''" || x[i] == ' ' || typeof x[i] == "number"){
      continue;
    } else {
      //If string does not include a letter from alphabet array, return false.
      return false;
    }
  }
  return true;
}

//(34) Kyu 7: Printer Errors
// If string doesn't include letters a-m, return the ratio of the wrong letters.  (aabbzz) -> "2/6"
  function printerError(s) {
  // Create array of good letters
  let goodLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i','j','k','l','m'];
  
  let stringWord = s.split('');
  
  let count = 0;
  let denom = s.length;
  
  for(let i = 0; i < stringWord.length; i++){
    if(goodLetters.includes(stringWord[i])){
      continue;
    } else {
      count = count + 1;
    }
  }
  return `${count}/${denom}`;
}

//(35) Kyu 6: Find the unique number
// Given array [1, 1, 1, 1, 2, 1, 1]: get the unique number returned (2);
function findUniq(arr) {
  let x = arr.sort();
  
  let a = x[0];
  let b = x[x.length-1];
  let c = x[1];
  
  if(a != c){
    return a;
  }
  
  if(b != c){
    return b;
  }
}  

//(36) Kyu 6: Sort the Odd
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// [5, 8, 6, 3, 4] -> [3, 8, 6, 5, 4]      [7, 1]  =>  [1, 7]

function sortArray(array) {
  //Create array of odds
  let odds = [];
  //Add odds to array
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 != 0){
      odds.push(array[i]);
    }
  }
  //Sort odds array
  let sortedOdds = odds.sort(function(a,b){
    return a-b});
  //Create answer array and add odds into it
  let answerArray = [];
  //Increment for answer array
  let answerIndex = 0;
  //Start pushing
  for(let j = 0; j < array.length; j++){
    if(array[j] % 2 == 0){
      answerArray.push(array[j]);
    } else if(array[j] % 2 != 0){
      answerArray.push(sortedOdds[answerIndex]);
      answerIndex = answerIndex + 1;
    }
  }
  return answerArray;
}

//(37) Kyu 6: Playing with Digits
// Given two positive integers, n and p, find k
// n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51   K = 51 
function digPow(n, p){
  //make array of numbers from n
  let nString = String(n);
  let nArray = nString.split('');
  let sum = 0;
  //Now the number is in an array to iterate over
  let exponent = p;
  for(let i = 0; i < nArray.length; i++){
    sum = sum + Math.pow(nArray[i], exponent);
    exponent++;
  }
  //Divide sum by n.
  let x = (sum / n);
  //If x is a whole number, return x else return -1;
  if(x == Math.floor(x)){
    return x;
  } else {
    return -1;
  }  
}


//(38) Kyu 6: Two Sum
// Given an array (numbers) and a target (target).  Find the index of 2 elements in the array that make the target.
function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length-1; i++) {
        for (let j = 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}

//(39) Kyu 6: Count characters in your string
function count (string) {  
  let count = {};
  for(let i = 0; i < string.length; i++){
    let letter = string[i];
    if(count[letter]){
      count[letter]++;
    } else {
      count[letter]=1;
    }
  }
  console.log(count);
  return count;
}

//(40) Kyu 6: Mexican Wave
//Given a string, capitalize each letter in a wave and pass it to an array -> Hello, hEllo, heLlo, helLo, hellO.  If there's whitespace, ignore it.
function wave(str){
  //Array to push strings into
  let answer = [];
  
  //If string is empty
  if(str.length < 1){
    return [];
  }
  
  //Turn string into an array
  let word = str.split('');
  
  //loop word array and capitalize a letter on each round
  for(let i = 0; i < word.length; i++){
    let x = str.toLowerCase().split('');
    if(x[i] == ' '){
      continue;
    }
    x[i] = x[i].toUpperCase();
    let y = x.join('');
    answer.push(y);
    x = word;
  }
  return answer;
}

//(41) Kyu 7: People in the bus
// Given an array [on, off] of people getting on and off the bus, return the amount of people left on the bus after the last stop.
var number = function(busStops){
  let on = 0;
  let off = 0;
  
  for(let i = 0; i < busStops.length; i++){
    on = on + busStops[i][0];
    off = off + busStops[i][1];
  }
  
  return on - off;
}

//(42) Kyu 7: Reverse String of Words
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// "This is an example!" ==> "sihT si na !elpmaxe"
function reverseWords(str) {
  //Make string array
  let answer = str.split(' ');
  let x = ''
  
  for(let i = 0; i < answer.length; i++){
    answer[i] = answer[i].split('').reverse().join('');
    if(i != answer.length - 1){
    x += answer[i] + ' ';
      } else {
        x += answer[i];
      }
  }
  return x;
}


//(43) Kyu 6: Count the smiley faces
// Given an array of strings, count how many smiley faces there are.  
//Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
//A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//Every smiling face must have a smiling mouth that should be marked with either ) or D   EXAMPLE: countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
//return the total number of smiling faces in the array
function countSmileys(arr) {
  if(arr.length < 1){
    return 0;
  }
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i][0] == ':' || arr[i][0] == ';'){
      if(arr[i].length > 2 && (arr[i][1] == '-' || arr[i][1] == '~')){
        if(arr[i][2] == ')' || arr[i][2] == 'D'){
          count = count + 1;
        }
      } else if (arr[i].length == 2){
        if(arr[i][1] == ')' || arr[i][1] == 'D'){
          count = count + 1;
        }
      }
    }
  }
  return count;
}

//(44) Kyu 7: Find the stray number
// GIven an array of same numbers except one, return the one
function stray(numbers) {
  
  let x = numbers.sort();
  
  if(x[0] != x[1]){
    return x[0];
  } else {
    return x[numbers.length - 1]
  }
}

//(45) Kyu 6: Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Given a number.. return the sum of all the multiples.  If it is a multiple of 3 and 5, only count it once.
function solution(number){
  
  let sum = 0;
  
  for(let i = 1; i < number; i++){
    if(i % 3 == 0 && i % 5){
      sum = sum + i;
    } else if(i % 3 == 0){
      sum = sum + i; 
    } else if(i % 5 == 0){
      sum = sum + i;
    }
  }
  return sum;
}

//(46) Kyu 6: Find the outlier
// Given an array of all evens or all odds, they contain a single outlier.  Return that outlier
// [2, 4, 6, 8, 9] --> 9 (The only odd number)
function findOutlier(integers){
  
  let answer1 = integers.filter((integer) => integer % 2 == 0);  //Returns an array of numbers that fit the filter
  let answer2 = integers.filter((integer) => integer % 2 != 0);
  
  if(answer1.length > 1){
    return Number(answer2); //Make the answer an integer and not an array
  } else {
    return Number(answer1);
  }
}

//(47) Kyu 6: Does my number look big in this?
// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
//For example, take 153 (3 digits), which is narcissistic: 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
//Return true if number is narcissistic or false if it isn't
function narcissistic(value) {
  // Turn integer into an array by making it a string first then splitting it
  let x = String(value);
  x = x.split('');  //Creates array made from value
  
  //Get exponent by length of value
  let v = String(value);  //Make value a string then use length to find the exponent
  let exponent = v.length;  //Use this as exponent for math
  
  let sum = 0;  //Track total
  
  //Loop the array
  for(let i = 0; i < x.length; i++){
    sum = sum + (x[i] ** exponent);  
  }
  
  if(sum == value){
    return true;
  } else {
    return false;
  }
}

//(48) Kyu 5: Put zeros at end of array
// Given an array, keep the place of everything except move the zeros to the end.  moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
function moveZeros(arr) {
  //New array to push items into except 0's
  let answer = [];
  let zeros = 0;
  
  //Loop through array.  If item is not zero add it to the array else increment 0 score.
  for(let i = 0; i < arr.length; i++){
      if(arr[i] === 0){
        zeros = zeros + 1;
        continue;
      } else{
        answer.push(arr[i]);
      }
  }
  
  //Add zeros to end of array until score == 0;
  while(zeros != 0){
    answer.push(0);
    zeros = zeros -1;
  }
  
  return answer;
}

//(49) Kyu 6: Sum of Digits
// Given a number, sum it's digits until the final sum is a single number
// 16 -> 1 + 6 = 7    292 -> 2+9+2 = 13 -> 1 + 3 = 4
function digitalRoot(n) {
  //Turn number into an array (String - Split - .map(Number))
  let numberArray = n.toString().split("").map(Number);
  
  //Loop through array and get sum
  let sum = 0; 
  
  for(let i = 0; i < numberArray.length; i++){
    sum = sum + numberArray[i];
  }
  
  //Use newSum for the while loop.  While the length is greater than 1 digit
  let newSum = sum.toString().split("").map(Number);
  while(newSum.length > 1){
    sum = 0;
    for(let j = 0; j < newSum.length; j++){  //get sum of newSum array
      sum = sum + newSum[j];
    }
    newSum = sum.toString().split("").map(Number);
  }
  
  return Number(newSum);  //Return final digit as a number and not an array
  
}

//(50) Kyu 6: Reverse strings if length is greater than 5
//Take string of one or more words, and returns the same string, but with all words that have five or more letters reversed
// "Hey fellow warriors"  --> "Hey wollef sroirraw"  "This is another test" --> "This is rehtona test"
function spinWords(string){
  //Split string into array
  let stringArray = string.split(' ');
  
  //Array to push answer string into
  let answer = [];
  
  //Iterate over the string array
  for(let i = 0; i < stringArray.length; i++){
    
    //If string length is greater or equal to 5
    if(stringArray[i].length >= 5){
      let reversal = '';
      //Iterate over each letter in reverse to reverse the word
      for(let j = stringArray[i].length - 1; j >= 0; j--){
        reversal = reversal + stringArray[i][j];
      } 
      //Push the word to the answer array
      answer.push(reversal);    
    } 
    //If string length is less than 5 push the word to the array
    else if(stringArray[i].length < 5){
      answer.push(stringArray[i])
    }
  }
  //Turn the array back into a string
  return answer.join(' ');
}



//(51) Kyu 6: Convert String to Camel Case
//"the-stealth-warrior" gets converted to "theStealthWarrior" "The_Stealth-Warrior" gets converted to "TheStealthWarrior"
function toCamelCase(str){
  //Empty string case
    if(str.length < 1){
      return str;
    }
  
    //Adding characters to this string for the answer
    let answer = '';
  
    //loop the string
    for(let i = 0; i < str.length; i++){
      
      //Boolean test if the character is a letter *(/[a-zA-Z]/).test()*
      if((/[a-zA-Z]/).test(str.charAt(i)) == true && (/[a-zA-Z]/).test(str.charAt(i-1)) == false && str.charAt(i) != str.charAt(0)){
        
        //If character before is not a letter, capitalize the next letter
        answer += str.charAt(i).toUpperCase();
      } 
        //If the character is a letter and the previous is also a letter, add the character as it is.
        else if((/[a-zA-Z]/).test(str[i]) == true){
        answer += str.charAt(i);
      }
    }
  return answer;
}


//52 (Kyu 6): Break CamelCase
//Given a string, add a space if the letter is uppercase
// "camelCasing"  =>  "camel Casing"  "identifier"   =>  "identifier"      "" =>  ""
function solution(string) {
  //Empty String Case
  if(string.lenght < 1){
    return "";
  }
  
  //Answer string to push letters to
  let answer = "";
  
  //For loop and compare string letter to lowerCase;
  for(let i = 0; i < string.length; i++){
    
    //If letter is lowercase, add it to the answer string
    if(string.charAt(i) === string.charAt(i).toLowerCase()){
      answer += string.charAt(i);
    } 
      //If letter is uppercase, add a space first then add the letter to answer string
      else if(string.charAt(i) === string.charAt(i).toUpperCase()){
      answer += ' ';
      answer += string.charAt(i);
    }
  }
  //Return answer String
  return answer;
}


//53(Kyu 6): Which are in?
//Given two arrays, a1 and a2, if a1 strings are part of words in a2, add them to an array and return them sorted.
// a1 = ["arp", "live", "strong"] a2 = ["lively", "alive", "harp", "sharp", "armstrong"] returns ["arp", "live", "strong"]
function inArray(array1,array2){
    //Answer array
  let answer = [];
  
  //Outer loop for array1
  for(let i = 0; i < array2.length; i++){
    
    //Inner loop to compare array1 to array2
    for(let j = 0; j < array2.length; j++){
      
      //If word in array2 includes partial from array1, add it to the answer
      if(array2[j].includes(array1[i])){
        if(answer.includes(array1[i])){
          continue;
        } else{
            answer.push(array1[i]);
          }
        
      }
    }
  }
  
  return answer.sort();
}


//54(KYU 6): Array Combinations
//Given an array of arrays, how many unique arrays can be formed by picking one element from each subarray?
// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].
//Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.
function solve(arr) {
  //Created a set to save unique values
  let answerSet = [];
  
  //Total variable to multiply against final array lengths
  let total = 1;
  
  //Create unique sets from original array
  for(let i = 0; i < arr.length; i++){
    let x = new Set(arr[i]);  //Turns array at index into a set of unique values
    answerSet.push(x);  //Push unique values into set
  }
  
  //Loop unique set to check their SIZE.  Sets = size Arrays = length
  for(let k = 0; k < answerSet.length; k++){
    total = total * answerSet[k].size; 
  }
  
  //Return total amount of variations
  return total;
  }

//55 (Kyu 6) Data Reverse
//Each segment is 8 bits long, meaning the order of these segments needs to be reversed, 
// for example: 11111111  00000000  00001111  10101010 should become 10101010  00001111  00000000  11111111
//Data is given as an array [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
function dataReverse(data) {
  
  //Push data into 8bit chunks into an array
  let chunk = '';
  let count = 0;
  let dataArray = [];
  
  //For every 8 count, add that chunk to the array and reset the chunk and counter variables
  for(let i = 0; i < data.length; i++){
    if(count != 8){
      chunk += data[i];
      count++;
    } 
    if(count == 8){
      dataArray.push(chunk);
      chunk = '';
      count = 0;
    } 
  }
  
  //Push chunks into an array
  let answer = [];
  for(let j = dataArray.length - 1; j >= 0; j--){
      answer.push(dataArray[j])
  }
  return answer.join('').split('').map(Number);    //.map(Number) 
}

//56 (Kyu 6): You will be given a number and you will need to return it as a string in Expanded Form. For example:
//12 --> "10 + 2" 45 --> "40 + 2" 70304 --> "70000 + 300 + 4"
function expandedForm(num) {
  //Make number into a string then add to the array
  let array = [];
  let numberString = String(num);

  //Create answer string to push numbers into
  let answer = '';
  
  //Add each number in the numberString to the Array
  for(let i = 0; i < numberString.length; i++){
    array.push(numberString[i]);
  }

  //Keep track of zeroes to add to string.  Adds "count" amount of zeroes to the current number
  let count = array.length - 1;
  const zero = '0';

  //Loop to add elements from array to answer string.
  for(let j = 0; j < array.length; j++){
      //If array value is zero, ignore zero values and continue
      if(array[j] == 0){
        count = count - 1;  //Still increment count to keep number of zeroes correct
      } else { 
        if(j + 1 != array.length){  //If the next index of j is not at the end of the number, add zeroes and a " + " to the string
          answer += array[j] + zero.repeat(count) + ' + ';
          count = count - 1;
        } else if(j + 1 == array.length){  //If next index of j is the end of the number, only add the number
          answer += array[j];
        }
      }
  }

  //removes extra " + " at end of string if it exists.  **Can handle elsewhere but this works.
  let y = answer.replace(/\s\+\s$/, '');
  return y;
}

//57 (Kyu 7):Find the divisors
//Given an integer > 1, return all of it's divisors in an array except for 1 and itself.
 function divisors(integer) {
    let x = integer;
    let answer = [];
   
  for(let i = 2; i <= x; i++){
    if(i == x){
      break;
    }
    
    if(x % i == 0){
      answer.push(i);
    }
  }
   
  if(answer.length < 1){
    return `${x} is prime`
  } else{
     return answer;
  }
}

//58  (Kyu 7): Mask the Credit card
// Mask the card numbers with # except the last 4.  (111 -> 111) (12345 -> #2345)
// return masked string
function maskify(cc) {
  
  //If length is < 5, return the original cc
  if(cc.length <= 4){
    return cc;
  }
  
  //Answer to push numbers into
  let answer = '';
  
  
  //Loop to Add #'s then add last 4 of cc
  for(let i = 0; i < cc.length; i++){
    //Add #'s until index hits last 4
    if(i < cc.length - 4){
      answer += '#';
    } else {
      //Add last 4 of the cc
      answer += cc[i];
    }
  }
  
  return answer;
}
//Second way of solving Maskify
function maskify(cc) {
  let x = cc.length - 4;  //Get length up to last 4 numbers
  let y = cc.slice(-4);  //Grab last 4 numbers
  
  let answer = '';
  //Loop to add #'s to answer
  for(let i = 0; i < x; i++){
    answer += '#'
  }
  //Join #'s with last 4 of cc
  return answer + y;
}

//59 (Kyu 6): Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// ['a','b','c','d','f'] -> 'e'           ['O','Q','R','S'] -> 'P'

function findMissingLetter(array){
  console.log('array is ' + array);
  //Create lowercase and uppercase alphabet arrays
  let smallAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  //Map the small array to uppercase
  let bigAlphabet = smallAlphabet.map(letter => letter.toUpperCase());

  //If first element is lowercase
  if(smallAlphabet.includes(array[0])){
    //Slice portion of array starting at indexOf first element and ending at the length of the array(+1 since array is missing an element)
    let smallSlice = smallAlphabet.slice(smallAlphabet.indexOf(array[0]), smallAlphabet.indexOf(array[0]) + array.length + 1);
    console.log('smallSlice = ' + smallSlice)
    //Loop through array comparing the slice to the original array
    for(let i = 0; i < smallSlice.length; i++){
      if(array.includes(smallSlice[i])){
        continue;
      } else { //If the element is not found in the smallSlice, return it
        return smallSlice[i];
      }
    }
  } 
  
  
  //If first element is UPPERCASE
  if(bigAlphabet.includes(array[0])){
    //Slice portion of array starting at indexOf first element and ending at the length of the array (+1 since array is missing an element)
    let bigSlice = bigAlphabet.slice(bigAlphabet.indexOf(array[0]), bigAlphabet.indexOf(array[0]) + array.length + 1);
    console.log('bigSlice = ' + bigSlice);
    for(let i = 0; i < bigSlice.length; i++){
      if(array.includes(bigSlice[i])){
        continue;
      } else { //If the element is not found in the bigSlice, return it
        return bigSlice[i]
      }
    }
  } 
}

//60 (Kyu 7): Sort the array
function solution (nums) {
  if (nums == null || nums.length < 1) {  //if nums is null or an empty array
    return []
  } else {
    return nums.sort((a, b) => a - b)  //Sorts an array of numbers.  Without the function it uses unicode
  }
}
