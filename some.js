// will return true if atleast one element pass the condition
// this is similar to OR operator

// will return true if all the elements pass the condition
// this is similar to AND operator

// case1:
const numbers = [1, 2, 3, 4, 5, 6, 7];
const result = numbers.some((item) => {
   return item % 2 === 0;
});
console.log(result); // true

// case2:
const numbers2 = [2, 4, 6];
const result2 = numbers2.some((item) => {
   return item % 2 === 0;
});
console.log(result2); // true
