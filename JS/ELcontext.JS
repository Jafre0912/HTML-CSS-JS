//Execution context: whenever we make a function that fxn creates a new imaginary container that contains 
// variable, fxn inside parent fxn , and laxical enviromnent

//Lexical Environment : the features of inner fxn which can access the all the features of outer fxn but outer fxn can't access of it

function cookFood() {
    let rice = "Biryani";  // Variable (सामान)
    let masala = "Spices"; // Variable (सामान)
    
    function serveFood() { // Inner Function (अंदर वाला कुक)
        console.log("Serving " + rice);
    }
    
    serveFood(); // Function Call (खाना परोसना)
}

cookFood(); // खाना बनाने का ऑर्डर


//👉 Execution Context = एगो रसोई घर, जहवाँ हर function के आपन अलग-अलग सामान (variables, functions) रहेला!
//👉 Lexical Environment = अंदर वाला function, बाहर वाला function के चीज देख सकेला, लेकिन बाहर वाला अंदर वाला के नाहीं! isko hindi me likho 