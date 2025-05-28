// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
  // array de longitudes
  const lengthWords = str.split(" ").map(word => word.length)  
  return Math.max(...lengthWords);
}

console.log("🚀 ~ findLongestWordLength('The quick brown fox jumped over the lazy dog'):", findLongestWordLength('The quick brown fox jumped over the lazy dog'))
