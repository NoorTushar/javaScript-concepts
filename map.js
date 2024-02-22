// MAP - similar to forEach, but it returns a new array with the values.

const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map((item) => {
   return item * 2;
});

console.log(doubleNumbers);

// it returns the new array with same length as the original array.
