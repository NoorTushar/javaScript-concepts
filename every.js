// will return true if all the elements pass the condition
// this is similar to AND operator

// case1:
const numbers = [1, 2, 3, 4, 5, 6, 7];
const result = numbers.every((item) => {
   return item % 2 === 0;
});
console.log(result); // false

// case2:
const numbers2 = [2, 4, 6];
const result2 = numbers2.every((item) => {
   return item % 2 === 0;
});
console.log(result2); // true

// case3: check if every element is a string

let names = ["Ronaldo", "Messi", "Beckham"];

console.log(names.every((el) => typeof el === "string")); // true
