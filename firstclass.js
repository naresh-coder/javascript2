var interviewQuestion = function(job){


    //closure concept
    var st = " could you tell me about your self ?"

     if(job==='java'){
        return function javanterviewQuestion(name) {
           // outter scope of function variable can be accessed by innter scope function even return function
             console.log(name+' '+st);
             console.log(name+" can you pleaese explain what is java why you used it  ?")

         }
     }

     else if(job =='UI/Ux'){
        return function uiInterviewQuestion() {

            console.log(name+' '+st);

            console.log("do you design ui/ux for your projects ?")

         }

     }

     else if("Python"){

        return function pythonInterviewQuestion() {
            console.log(name+' '+st);

            console.log(" do you know how to develop AI project  ?")
         }
     }


}



interviewQuestion("java")('naresh');






(function(){
    var p = q = 3;
})();

console.log("p defined? " + (typeof p !== 'undefined'));
console.log("q defined? " + (typeof q !== 'undefined'));



var myObject = {
    abc: "123",
    func: function() {
        var self = this;
        console.log("outer func:  this.abc = " + this.abc);
        console.log("outer func:  self.abc = " + self.abc);
        (function() {
            console.log("inner func:  this.abc = " + this.abc);
            console.log("inner func:  self.abc = " + self.abc);
        }());
    }
};
myObject.func();






function display(data) {
     console.log(data);  // hello

 } 

const futuredata = fetch('https://jsonplaceholder.typicode.com/posts/1');  //fascade method has  where it has logic true/false value when data comes flag set true
// then it takes displays the value and execute the remaining statements, if it is false it executes remaining statement until change flag will be changed to true
// assume futuredata = 'hello'
futuredata.then(result =>{
    console.log(result);

} ).// assume 3 ms

 console.log("me 1 first");
console.log("me 2 first");
console.log("me 3 first"); 
// o/p  : hello
console.log("me 4 first");
console.log("me 5 first");
 console.log("me 6 first");



// resolve
//reject










