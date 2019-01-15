years =[1967,1985,1980,1990,1998,1947];

// ES5
var  ages = years.map(function (value,index) {

//console.log(value +'= value '+ index+' = index');

 return 2018 - value;
})



//ES6


let agess = years.map(el => 2016 -el);

let agesst = years.map((el,index)=> `Age element at ${index+1}:${2016 - el}.`);
console.log(agesst);

agesst = years.map((el,index)=> {

    const now = new Date().getFullYear();
    const age = 2016 -el;

    return `Age element at ${index+1}:${age}.`

});



console.log(agesst);


console.log(agesst);
console.log(ages);





let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2016 - year;
}
// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');
// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));