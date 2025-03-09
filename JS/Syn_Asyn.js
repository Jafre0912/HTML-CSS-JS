//Syn fxn: In Js, synchronous execution means that code runs sequentially, line by line means when first line of code completely executes then only 2nd line of code will start 
//

//example 1
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

//example2
let objB={
    name:"jafre",
    age:22,
    DOB:"01-24-2003",
    roll: 12345678,
    add: function(a,b){ //this is the function of object not the property of object 
        return a+b;
    }
}
//by using forin loop
for(var key in objB){
    console.log(key,objB[key]);
}


//Asyn fxn: Yes! In asynchronous JavaScript, if you start multiple tasks at the same time, they don’t necessarily complete in order. Instead, the task that finishes first gets executed first.
//all these fxn we use: setTimeout(), setInterval(),fetch(), axios, XMLHttpRequest, Promise, async/await
//example 
console.log("hey");
setTimeout(function(){
    console.log("hello")
},2000)

