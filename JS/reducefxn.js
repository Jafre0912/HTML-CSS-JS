//reduce(): this return the single value from the array eg total value of array data
let arr = [1,2,3,4,5,6,7,8]
let totalVal=arr.reduce((total,v,i)=>{
    return total+v;
})
console.log(totalVal)