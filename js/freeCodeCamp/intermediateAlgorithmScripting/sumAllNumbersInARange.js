// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  const max = Math.max(...arr)
  const min = Math.min(...arr)
  let total = 0
  for (let index = min; index <= max; index++) {
    total += index
  }
  return total;
}

// formula: progresión aritmética
function sumAllV1(arr) {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  const count = max - min + 1
  return (count * (min + max)) / 2;
}

console.log("🚀 ~ sumAllV1([1, 4]);:", sumAllV1([1, 4]))
