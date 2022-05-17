const numbers = [3,4,5,6,7,8];


//map ===========================>

const output =numbers.map(x=> x*x)
console.log(output);  // full array 


//filter ===========================>

const result = numbers.filter(x => x>5);
console.log(result);  // condition er modde full array dibe.

//find ===========================>
const search = numbers.find(x => x>5); 
console.log(search); // condition er modde only ekta number dibe