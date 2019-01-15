// primitive varible

var age =  40;

var b = age;
b = 28;

console.log(age);
console.log(b);



// object variable
var obj1 = {

    name :"Mark",
    city :"london"

}


// for object
// obj1.prototype.currenty is not working
// in the below defaultly creates prototype as showing below
// we can use for Object.create() for create new object like
// inheritance
obj1.__proto__.currency ="DOLLER";

var obj2 = obj1;

obj2.name =" John";

console.log(obj2.name);


function change(age,ob){
    age = 400;
    ob.city="bangalore";
}

change(age,obj1);

console.log(age);
console.log(obj1.city);

console.log(obj2.currency);

console.log(obj1.hasOwnProperty('currency')); // false  because it inherits from obj1 and it does not own the currency property & value ;

console.log(obj2.hasOwnProperty('currency')); // also false I am not sure why ?


// now we try with constructor


var Person = function(firstname,lastname,year){
    this.firstname = firstname;
    this.lastname = lastname;
    this.year = year;


}
// here inherits the prooperty all object
Person.prototype.calculateAge = function(){
    console.log(2016-this.year);
}

// we are calling constrctor
var sur = new Person('suresh','machili',313);
sur.calculateAge();


var sur = new Person('naresh','testing',2018);
sur.calculateAge();


//onsole.log(Person);










