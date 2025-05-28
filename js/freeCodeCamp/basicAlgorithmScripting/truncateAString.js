// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  return (num < str.length) ? str.slice(0, num) + "..." : str;
}

// function truncateStringV1(str, num) {
//   let slicedStr = ""
//   for (let index = 0; index < num; index++) {
//     slicedStr += str[index]
//   }
//   return slicedStr + "...";
// }

console.log("🚀 ~ truncateString('A-tisket a-tasket A green and yellow basket', 8);:", truncateString('A-tisket a-tasket A green and yellow basket', 8))

// console.log("🚀 ~ truncateStringV1('A-tisket a-tasket A green and yellow basket', 8);:", truncateStringV1('A-tisket a-tasket A green and yellow basket', 8))
