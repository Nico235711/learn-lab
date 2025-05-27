// 1. Check if the 'Fast Attack' action is possible
// Implement a function named canExecuteFastAttack that takes a boolean value which indicates if the knight is awake. This function returns true if the 'Fast Attack' action is available based on the state of the character. Otherwise, returns false:

function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake
}

// const knightIsAwake = true;
// console.log(canExecuteFastAttack(knightIsAwake)); // => false

// 2. Check if the 'Spy' action is possible
// Implement a function named canSpy that takes three boolean values, indicating if the knight, archer and the prisoner, respectively, are awake. The function returns true if the 'Spy' action is available based on the state of the characters. Otherwise, returns false:

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake
}

// const knightIsAwake = false;
// const archerIsAwake = true;
// const prisonerIsAwake = false;
// console.log(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)); // => true

// 3. Check if the 'Signal Prisoner' action is possible
// Implement a function named canSignalPrisoner that takes two boolean values, indicating if the archer and the prisoner, respectively, are awake. The function returns true if the 'Signal Prisoner' action is available based on the state of the characters. Otherwise, returns false:

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake
}

// const archerIsAwake = false;
// const prisonerIsAwake = true;
// console.log(canSignalPrisoner(archerIsAwake, prisonerIsAwake)); // => true

// 4. Check if the 'Free Prisoner' action is possible
// Implement a function named canFreePrisoner that takes four boolean values. The first three parameters indicate if the knight, archer and the prisoner, respectively, are awake. The last parameter indicates if Annalyn's pet dog is present. The function returns true if the 'Free Prisoner' action is available based on the state of the characters and Annalyn's pet dog presence. Otherwise, it returns false:

function canFreePrisoner(...args) {
  const [knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent] = args
  const fastAttack = canExecuteFastAttack(knightIsAwake)
  const signalPrisoner = canSignalPrisoner(archerIsAwake, prisonerIsAwake)
  return (!archerIsAwake && petDogIsPresent) || (!petDogIsPresent && !knightIsAwake && !archerIsAwake && prisonerIsAwake)
}

const knightIsAwake = false;
const archerIsAwake = false;
const prisonerIsAwake = true;
const petDogIsPresent = true;
console.log(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent)); // => true