function myFun(num1, num2){
    return num1+num2;
}
let fxncall = myFun(20,10)
console.log(fxncall)

//multiple return
function addData(num1,num2){
    return{
        sum : num1+num2,
        difference : num1-num2
    }
}
let myans = addData(20,10)
console.log(myans.sum)
console.log(myans.difference)

