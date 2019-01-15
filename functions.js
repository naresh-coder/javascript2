
var array =[1990,1997,2000,1987,1999,1920,1960,1950];



function arratCalc(arr,fn){

    var resAge =[];

    for(var i = 0;i < arr.length;i++){

         resAge.push(calculate(arr[i]));



    }

return resAge;
}

var fn = function calculateAge(year) {

    return 2018 - year;

}

function isMajarAge(age) {

    return age >= 18;

}



var ages = arratCalc(array,calculate);

var majors = arratCalc(ages,isMajarAge);


console.log(majors);

console.log(ages);
