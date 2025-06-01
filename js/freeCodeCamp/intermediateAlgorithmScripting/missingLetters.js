// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  for (let index = 0; index < str.length - 1; index++) {
    const currentAsciiLetter = str.charCodeAt(index)
    const nextAsciiLetter = str.charCodeAt(index + 1)
    if (currentAsciiLetter + 1 !== nextAsciiLetter) {
      return String.fromCharCode(currentAsciiLetter + 1)
    }
  }
  return undefined
}

console.log(fearNotLetter("abce"));    // "d"
console.log(fearNotLetter("abcdefghjklmno")); // "i"
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // undefined