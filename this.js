const person = {
   name: "Tushar",
   age: 18,
   isMale: true,
   english: 88,
   math: 95,
   science: 94,
};

function showThis() {
   console.log(this);
}

showThis();
