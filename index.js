// create a factory function which returns a function

let trueOrFalseFactoryFunction = function (input) {
   if (input === "odd") {
      let odd = function (n) {
         console.log(n % 2 !== 0);
      };

      return odd;
   } else if (input === "even") {
      let even = function (n) {
         console.log(n % 2 === 0);
      };

      return even;
   }
};

let result = trueOrFalseFactoryFunction("odd");

result(3); // true

result(6); // false
