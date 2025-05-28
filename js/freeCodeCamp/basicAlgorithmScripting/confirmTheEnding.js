// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  // console.log(str.slice(-target.length)); // toma los caracteres necesarios
  return str.slice(-target.length) === target;
}

console.log("🚀 ~ confirmEnding('Bastian', 'n');:", confirmEnding('Bastian', 'n'))
console.log(`🚀 ~ confirmEnding("He has to give me a new name", "name"):`, confirmEnding("He has to give me a new name", "name"))
console.log(`🚀 ~ confirmEnding("Connor", "n"):`, confirmEnding("Connor", "n"))
