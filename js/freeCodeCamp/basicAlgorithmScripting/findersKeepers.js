// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
  return arr.filter(num => func(num))[0]
}

console.log("🚀 ~ con filter => findElement([1, 2, 3, 4], num => num % 2 === 0);:", findElement([1, 2, 3, 4], num => num % 2 === 0))

function findElementV1(arr, func) {
  return arr.find(num => func(num)) // .find() regresa el primer elemento que cumpla la condición o undefined si no hay ninguno
}

console.log("🚀 ~ con find => findElementV1([1, 2, 3, 4], num => num % 2 === 0);:", findElementV1([1, 2, 3, 4], num => num % 2 === 0))

function findElementV2(arr, func) {
  let num = 0;
  let flag = false
  for (let index = 0; !flag && index < arr.length; index++) {
    if (func(arr[index])) {
      flag = true
      num = arr[index]
      return num;
    }
  }
  return undefined
}

console.log("🚀 ~ con for => findElementV2([1, 2, 3, 4], num => num % 2 === 0);:", findElementV2([1, 2, 3, 4], num => num % 2 === 0))
