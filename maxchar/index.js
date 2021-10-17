// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charsObj = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (!charsObj[char]) {
      charsObj[char] = 1;
    }
    charsObj[char]++;
  }

  //char is assigned as the key
  for (let char in charsObj) {
    if (charsObj[char] > max) {
      max = charsObj[char];
      maxChar = char;
    }

    return maxChar;
  }
}

module.exports = maxChar;
