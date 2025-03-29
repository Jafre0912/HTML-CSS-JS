//map() :- y fxn apke existing array me koi value update krke new array me daalta hh and then uss new array print hota hh 

let l = [1,2,3,4,5,6,7,8]
let ans=l.map((v,i)=>v+5)//v = array value   i=index
console.log(ans) //this gives new array

let l1 = [10,20,30,40,50] //map fxn array me jitna value hh new array me utna hi value update krke dega 
let newArr=l1.map((v,i)=>{
    return v+i;
})
console.log(newArr)

//map fxn: simple map fxn value ko update krne k lye use hota hh jaise hrr arr value me 1 ya 2 ko update krna hai toh update karke same length of array output deta hai