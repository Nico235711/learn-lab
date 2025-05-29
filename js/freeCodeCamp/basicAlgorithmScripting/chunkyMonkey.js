// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  const groups = []
  for (let index = 0; index < arr.length; index += size) {
    const group = arr.slice(index, index + size)
    groups.push(group)
  }
  return groups;
}

console.log("🚀 ~ chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);:", chunkArrayInGroups(['a', 'b', 'c', 'd'], 2))

console.log("🚀 ~ chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2):", chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2))

console.log("🚀 ~ chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3):", chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3))
