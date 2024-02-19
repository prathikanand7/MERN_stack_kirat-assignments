/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  let lower_str = str.toLowerCase();
  let final_str = "";
  
  // str = str
  //   .toLowerCase() //Convert it to LowerCase
  //   .trim() //Remove All Spaces Value
  //   .replace(/[^a-zA-Z0-9]/g, ""); //Remove All NonAlphaNumeric Value

  for (let i = 0; i < lower_str.length; i++) {
    if (lower_str[i] >= "a" && lower_str[i] <= "z")
      final_str += lower_str[i];
  }
  let reverse_str = final_str.slice(-final_str.length, 0);

  if (final_str.startsWith(reverse_str) && final_str[0] == final_str[final_str.length - 1])
    return true;
  else
    return false;
}

module.exports = isPalindrome;
