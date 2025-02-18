// Object: A real-world entity that has state (attributes) and behavior (methods). Objects are instances of a class.
//Class: A blueprint or template for creating objects. It defines the properties (variables) and behaviors (methods) that the objects will have.


//the empty obj is 
let objA={

}

//obj with values(properties/characters)
let objB={
    name:"jafre",
    age:22,
    DOB:"01-24-2003",
    roll: 12345678,
    add: function(a,b){ //this is the function of object not the property of object 
        return a+b;
    }
}
console.log(objB.add(2,3));
console.log(objB.name);
