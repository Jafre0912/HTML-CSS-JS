//foreach loop: always runs on array whenever u have an array only use foreach
// it used to perform operation on each items/index of the array but cannot break or return 

let plates = ["लिट्टी-1", "लिट्टी-2", "लिट्टी-3", "लिट्टी-4", "लिट्टी-5"];

// 🍽️ सबके बारी-बारी से सर्व करो
plates.forEach(function(plate, index) {
    console.log(`Plate ${index + 1}: ${plate} सर्व हो रहल बा!`);
});


//for in loops 
Obj={
    name:"jafre",
    age:22,
    city:"jalandhar",
    uni:"lpu"
}
for(var key in Obj){ // for in loop
    console.log(key,Obj[key]);
}
