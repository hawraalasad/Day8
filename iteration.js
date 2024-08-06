const numbers = [10, 13, 20, 25, 38, 35, 40];
let numbers25 = numbers.filter((number) => {
  if (number >= 25) {
    return true;
  } else {
    return false;
  }
});
console.log(numbers25);
let numbers5 = numbers.filter((number) => {
  if (number % 5 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(numbers5);

const numSquared = numbers.map((number) => {
  return number * number;
});
console.log(numSquared);

const numberMultiplied = numbers.map((number) => {
  return number * 2;
});
console.log(numberMultiplied);

let filtered = numbers.filter((number) => {
  if (number >= 20) {
    return true;
  } else {
    return false;
  }
});
console.log(filtered);
let squared = filtered.map((filtered) => {
  return filtered * filtered;
});
console.log(squared);
let filtered2 = numbers.filter((number) => {
  if (number % 5 == 0) {
    return true;
  } else {
    return false;
  }
});
let multi = filtered2.map((number) => {
  return number * 3;
});
console.log(multi);
//Spicy part
