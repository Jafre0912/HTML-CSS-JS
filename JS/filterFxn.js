//filter() : filter fxn filter the data as per our i/p command and return the required data from the orginal array
let arr = [10,11,12,13,14,15,16,17,18]
let filterdata = arr.filter((v,i)=>v%2==0)
console.log(filterdata);