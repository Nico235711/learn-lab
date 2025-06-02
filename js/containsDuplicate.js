// verificar si un numero esta presente al menos dos veces en un array:

// nums = [1,2,3,1]

// O(n^2)
function containsDuplicateWithForLoop(nums) {
  const start = performance.now()
  for (let index = 0; index < nums.length; index++) {
    for (let otherIndex = index + 1; otherIndex < nums.length; otherIndex++) {
      if (nums[index] === nums[otherIndex]) return true
    }
  }
  const end = performance.now()
  console.log(`Duro: ${(end - start) / 1000}s`);
  return false
}

const nums = Array.from({ length: 50 }, () => Math.floor(Math.random() * 1000) + 1);

console.log("🚀 ~ con dos for ~ containsDuplicateWithForLoop(nums):", containsDuplicateWithForLoop(nums))
console.log("🚀 ~ con dos for containsDuplicateWithForLoop(nums):", containsDuplicateWithForLoop(nums))
console.log("-------------------------------------------------------------");

// O(n)
function containsDuplicateWithSet(nums) {
  const start = performance.now()
  const seen = new Set()
  for (let index = 0; index < nums.length; index++) {
    if (seen.has(nums[index])) return true
    seen.add(nums[index])
  }
  const end = performance.now()
  console.log(`Duro: ${(end - start) / 1000}s`);
  return false
}

console.log("🚀 ~ con dos for ~ containsDuplicateWithSet(nums):", containsDuplicateWithSet(nums))
console.log("🚀 ~ con dos for ~ containsDuplicateWithSet(nums):", containsDuplicateWithSet(nums))