//Default Export 
let sumData=(x,y)=>(x+y);
console.log(sumData(3,5));
export default sumData;

// Named Export Functions
let mulData1 = (a, b) => (a * b);
let divData1 = (c, d) => (c / d);
export { mulData1, divData1 };
