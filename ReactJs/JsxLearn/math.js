let sumData=(a,b)=>{
    return a+b;
}
console.log(sumData(2,4));


let Inp=(name)=>("Jafar Alam");

let dataA=(c=10,d=5)=>{
    return{
        sub:c-d,
        sum:c+d,
        mul:c*d,
    };
};
export {Inp,dataA};