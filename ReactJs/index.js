import subData from "./Calculator.js"; // Default import
console.log(subData(9, 3)); // Logs: 12

// Named imports with alias
import { mulData as mul, divData, name, DivD } from "./Calculator.js";
console.log(mul(2, 2));       // Logs: 4
console.log(name);            // Logs: Calculator Module
console.log(DivD);            // Logs: Division Data
console.log(divData(4, 2));   // Logs: 2

// Named imports from React.js with alias
import { mulData1 as m, divData1 as d } from "./React.js";
console.log(m(2, 2));         // Logs: 4
console.log(d(3, 3));         // Logs: 1
