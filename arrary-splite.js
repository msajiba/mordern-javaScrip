
const numbers = [1,2,3,4,5,6,7,8,9];

const num = numbers.slice(2,5);
console.log(num);
console.log(numbers);

const remove = numbers.splice(2,5); // main array cut hbe
console.log(remove);
console.log(numbers);

const together = numbers.join(" ");  // arrary sob string hoye jabe
console.log(together);