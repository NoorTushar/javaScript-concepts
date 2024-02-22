const person = {
   name: "Tushar",
   age: 18,
   isMale: true,
   english: 88,
   math: 95,
   science: 94,
   prop: this, // global scope // so will be WINDOW

   getName: function () {
      console.log(this);
      return this.name; // who is calling the function?
      // person is calling the getName function
      // so here this will be PERSON
   },

   // now let us use arrow function

   getNameArrow: () => {
      console.log(this);
      return this.name;
   },
};

console.log(person.prop); // window object

console.log(person.getName()); // person + Tushar
console.log(person.getNameArrow()); // WINDOW + undefined
