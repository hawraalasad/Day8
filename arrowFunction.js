const greet = (name) => `Hello, ${name}!`;
console.log(greet("Hawraa"));
const sum = (a, b) => a + b;
console.log(sum(3, 7));
const square = (n) => n * n;
console.log(square(4));

let num = [1, 2, 4, 7];

const squarearray = num.map((number) => {
  return number * number;
});

console.log(squarearray);
