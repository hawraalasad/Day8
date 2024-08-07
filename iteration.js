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
// let logger = array.forEach((number) => {
//   number;
// });

const logger = (array) => {
  array.forEach((element) => {
    console.log(element);
  });
};

logger([10, 20, 30, 40]);

let temperatureC = (array) => {
  let temp = array.map((number) => {
    return (number - 32) * (5 / 9);
  });
  return temp;
};
console.log(
  `Temperature in Celcius is`,
  temperatureC([30, 40, 50, 20, 24, 76, 109, 180, 160, 132])
);

let temperatureHot = [40, 50, 66, 34, 25, 20];
let hot = temperatureHot.filter((number) => number >= 35);

console.log(hot);
