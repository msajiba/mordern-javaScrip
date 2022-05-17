const students = [
    {id: 01, name:'sajib'},
    {id: 02, name: 'rahul'},
    {id: 03, name: 'ahmed'},
    {id: 04, name: 'pasa'},
    {id: 05, name: 'kabila'},
    {id: 06, name: 'shuvo'}
];

// use for loop
let student = []; 
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    student.push(element.name);
}

//use map
const names = students.map(s => s.name);
const ids = students.map (s =>s.id);
console.log(names, ids);

//use filter
const sId = students.filter(s => s.id > 3);
console.log(sId);

//use find
const sIds = students.filter(s => s.id > 3);
console.log(sIds);