//event loop : Event loop continuously check karta hai ki async code complete hua ya nahi. Agar complete ho jaye, to wo async code Call Stack me move hota hai Task Queue ya Microtask Queue se. Ye process event loop tab tak check karta rehta hai jab tak saare async operations complete na ho jaye.
console.log("hey"); //sync
console.log("alam");
setTimeout(() => {  //will stay in queue
    console.log("hey")
}, 0);

console.log("how are u");