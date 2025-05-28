// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// function largestOfFour(arr) {
//   let largestNumbers = []
//   for (let index = 0; index < arr.length; index++) {
//     const subArray = arr[index]
//     let largestNumber = subArray[0]
//     for (let index = 0; index < subArray.length; index++) {
//       if (largestNumber < subArray[index]) largestNumber = subArray[index]
//     }
//     largestNumbers.push(largestNumber)
//   }
//   return largestNumbers;
// }

function largestOfFourV1(arr) {
  // arr.forEach(subArray => console.log(subArray));
  // const largestNumbers = arr.map(subArray => Math.max(...subArray))
  return arr.map(subArray => Math.max(...subArray))
}

console.log("🚀 ~ largestOfFourV1([[4, 5, 1, 3],[13, 27, 18, 26],[32, 35, 37, 39],[1000, 1001, 857, 1]]):", largestOfFourV1([[4, 5, 1, 3],[13, 27, 18, 26],[32, 35, 37, 39],[1000, 1001, 857, 1]]))
