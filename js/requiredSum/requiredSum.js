// Ejemplo 1
// Input: nums = [1,4,3,9], requiredSum = 8
// Output: False
// Ejemplo 2
// Input: nums = [1,2,4,4], requiredSum = 8
// Output: True

function hasPairWithSum(numbers, requiredSum) {
  const uniqueNumbers = new Set()
  for (const number of numbers) {
    if (uniqueNumbers.has(requiredSum - number)) return true
    uniqueNumbers.add(number)
    // console.log(uniqueNumbers);
  }
  return false
}

console.log(hasPairWithSum([1, 2, 4, 4], 8))           // True
console.log(hasPairWithSum([5, 7, 1, 2], 8))           // True
console.log(hasPairWithSum([3, 3], 6))                 // True
console.log(hasPairWithSum([0, -1, 1], 0))             // True
console.log(hasPairWithSum([10, 15, 3, 7], 17))        // True

console.log(hasPairWithSum([1, 4, 3, 9], 8))           // False
console.log(hasPairWithSum([], 5))                     // False
console.log(hasPairWithSum([4], 4))                    // False
console.log(hasPairWithSum([1, 2, 3], 10))             // False
console.log(hasPairWithSum([-1, 0, 2], 3))             // False

