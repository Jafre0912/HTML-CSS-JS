//Call Back function: a fucntion which declares inside of a function and after execution of main fxn then only it executes called callback function 
setTimeout(function(){ //function() is the callback function
    console.log("the callback fucnton will execute after 2 second")
},2000)



//another example
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();  // Callback function ko yahan call karr rahe hai
}

function sayBye() {
    console.log("Goodbye!");
}
// greet function ko call kar rahe hai aur usme sayBye function de rahe hain
greet("Jafre", sayBye);





//fist class function :Jbb JavaScript me functions ko ek variable me store kar skte hain, kisi function ko argument ke roop me de sakte hain, aur return bhi kar sakte hain, toh usko First-Class Function kaha jata hai. 
let greet = function() { //function stored in greet variable 
    console.log("Hello, Jafre!");
};

greet();  // Output: Hello, Jafre!


//example 2 function passed as a argument 
function sayHello(callback) {
    callback();
}

sayHello(function() {
    console.log("Hello from Callback!");
});



//exmp3 return the function 
function multiplyBy(num) {
    return function(x) {
        return x * num;
    };
}

let double = multiplyBy(2);
console.log(double(5)); // Output: 10..


