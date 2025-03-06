function jafre(a,b){ //here a,b are as parameter
     let sum = a+b;
    console.log(sum);
}
jafre(2,4); //here 2, 4 are as argument it's used during calling the function

//Array: An array is a collection of elements of the same data type, stored in contiguous memory locations.
//Basic Operations on array 
let arr = [1,2,3,4,5,6,7,8];
console.log("the original array is:"+ arr);

arr.pop(); //remove the last element from the array
console.log("array after pop oprtion:"+arr);

arr.shift();//remove the first element of the array
console.log("array after shift oprtion:"+arr);

arr.unshift();//add 1st element to the begining of the array
console.log("array after unshift oprtion:"+arr);

arr.push();//add element to the end of the array 
console.log("array after push operation"+arr);

arr.splice(2,3)// here 2 indicates that to remove the element from the index 2 and 3 indicates that to remove the 3 elements from index 2
console.log("Array after splice oprtion:"+arr);

//array is the object in js
var arr1 = [10,20,30,40,50];
// this array stores in js like this 
arr1={
    0:10,
    1:20,
    2:30,
    3:40,
    4:50
}
for(var key in arr1){
    //console.log(arr1[key]);
    console.log(key,arr1[key])
}
