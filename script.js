

var calculate= function(bill){

    if(bill  <= 50){
        return (20*bill)/100;
    }
    else if(bill > 50&&  bill < 200){
        return (15*bill)/100;

    }
    else{
        return (10*bill)/100;

    }


}

//calculate(43);
console.log(calculate(208));

