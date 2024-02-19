/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let lower_str = str.toLowerCase();
  let number_of_vowels = 0;

  for (let index = 0; index < lower_str.length; index++) {
    if (lower_str[index] == "a" || lower_str[index] == "e" || lower_str[index] == "i" || lower_str[index] == "o" || lower_str[index] == "u")
      number_of_vowels += 1;
  }
  return number_of_vowels;
}

module.exports = countVowels;