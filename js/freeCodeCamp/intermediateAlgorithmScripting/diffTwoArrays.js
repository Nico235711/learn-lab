
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  const newArr = [];
  for (const item of arr1) {
    if (!arr2.includes(item)) {
      newArr.push(item)
    }
  }
  for (const item of arr2) {
    if (!arr1.includes(item)) {
      newArr.push(item)
    }
  }
  return newArr;
}

console.log("🚀 ~ diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);:", diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))

function diffArrayV1(arr1, arr2) {
  const newArr = [
    ...arr1.filter(item => !arr2.includes(item)),
    ...arr2.filter(item => !arr1.includes(item))
  ];
  return newArr;
}

console.log("🚀 ~ diffArrayV1([1, 2, 3, 5], [1, 2, 3, 4, 5]);:", diffArrayV1([1, 2, 3, 5], [1, 2, 3, 4, 5]))
