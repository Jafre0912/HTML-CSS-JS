//arrow function
let addData=()=>console.log("hy jafar"); //no parameters 
addData(); //no arguments 


//returning arrow fxn wothout return keyword if {} braces not uses the directly =>num1*num2
let addData1 = (num1,num2)=>num1*num2; //here not required to write the return num1*num2 and return =>num1*num2
console.log(addData1(10,2)); 


let addData2 = num1 =>num1; //for single parameter no need to use(num1);
let ans = addData2(5);
console.log(ans);


let addData3 = (a,b)=>{ //if {} braces use then reutrn is mandatory to use otherwise o/p will not get...
    return a+b;
}
let ans1 = addData3(2,4)
console.log(ans1)

//using default values
let myfun = (n1=5,n2=5)=>{
    return{
        sum:n1+n2,
        diff:n1-n2,
        mul:n1*n2,
        div:n1/n2
    }
}
//let myAns = myfun(10,10) (if u will not pass any argument then default value n1,n2=5 will assigned )
let myDefaultAns = myfun();
console.log(myDefaultAns.sum);