// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  // se empieza desde el indice n
  // no se le eliminan elementos
  // se insertan los elementos del arr1 usando el spread operator
  return arr2.splice(n, 0, ...arr1);
}

console.log("🚀 ~ frankenSplice([1, 2, 3], [4, 5, 6], 1);:", frankenSplice([1, 2, 3], [4, 5, 6], 1))
