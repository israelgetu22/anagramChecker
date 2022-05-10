//Given two strings, write a function to determine if the second string is an anagram of the first string.
//An anagram is a word or phrase formed by rearranging the letters of another.
//cinema = iceman

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false; // is not anagram

  let str1Chars = {};
  let str2Chars = {};

  for (let char of str1) {
    str1Chars[char] = (str1Chars[char] || 0) + 1;
  }
  //console.log(str1Chars);
  for (let char of str2) {
    str2Chars[char] = (str2Chars[char] || 0) + 1;
  }
  //console.log(str2Chars);
  for (let key in str1Chars) {
    //console.log(str1Chars[key], str2Chars[key]);
    if (str1Chars[key] !== str2Chars[key]) {
      return false;
    }
  }
  return true;
};

console.log(validAnagram("cinemas", "diceman"));
console.log(validAnagram("cinema", "iceman"));
