// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // console.log(str
  //   .replace(/([a-z])([A-Z])/g, "$1 $2")
  //   .replace(/[\s_+]/g, "-")
  //   .toLowerCase()
  // );

  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2") // $1 y $2 representan los grupos
    .replace(/[\s_+]/g, "-")
    .toLowerCase()
}

// console.log("🚀 ~ spinalCase('This Is Spinal Tap');:", spinalCase('This Is Spinal Tap'))

console.log(`🚀 ~ spinalCase("AllThe-small Things"):`, spinalCase("AllThe-small Things"))
