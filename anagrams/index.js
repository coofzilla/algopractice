// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//const word = "HI THERE!!"
//word.replace(/[^\w]/g,"").toLowerCase();

// function anagrams(stringA, stringB) {
//   const filteredA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   //filter stringA
//   const filteredB = stringB.replace(/[^\w]/g, '').toLowerCase();
//   //filter stringB
//   if (filteredA.length !== filteredB.length) {
//     return false; //return false if length not same same
//   }
//   let objA = {};
//   //make object of stringA
//   let objB = {};
//   //make object of stringB
//   for (let el of filteredA) {
//     objA[el] = (objA[el] || 0) + 1;
//   } //record values of stringA
//   for (let el of filteredB) {
//     objB[el] = (objB[el] || 0) + 1;
//   } //record values of stringB

//   //iterate over array use of; iterate over object use in
//   for (let char in objA) {
//     if (objA[char] !== objB[char]) {
//       return false;
//       //compare the two to make sure same same
//     }
//   }
//   return true;
// }

//helper func to build character maps
function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    //preincrement operator increments and returns the value after incrementing.
    charMap[char] = ++charMap[char] || 1;
  }
  return charMap;
}

function anagrams(stringA, stringB) {
  const charMapA = buildCharMap(stringA);
  const charMapB = buildCharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }
  //check if value at key is same, false if not
  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }
  return true;
}

// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// }
// //sort will sort elements of an array
// function cleanString(str) {
//   return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// }

module.exports = anagrams;
