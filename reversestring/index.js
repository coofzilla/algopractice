// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// module.exports = reverse;

//easiest solution
// function reverse(str) {
//   const arr = str.split("");
//   arr.reverse();
//   return arr.join("");
// }

// module.exports = reverse;

//easier
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// module.exports = reverse;

// more pro
const reverse = (str) => {
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
  }
  console.log(reversed);
};

reverse("Elephant");

//most pro
// function reverse(str) {
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed;
//   }, '');
// }

// reverse('asdf');

module.exports = reverse;
