// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
  let repeatedStr = ""
  for (let index = 0; index < num; index++) {
    repeatedStr += str
  }
  return repeatedStr;
}

console.log("🚀 ~ repeatStringNumTimes('abc', 3);:", repeatStringNumTimes('abc', 3))
