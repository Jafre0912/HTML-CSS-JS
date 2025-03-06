import subData  from "./Calculator.js";
console.log(subData(9,3));
import { mulData as mul,divData,name,DivD} from "./Calculator.js"; //importing named export fxn using curly brace
console.log(mul(2,2)); // here mul is used as mulData fxn this is called aliyas 
console.log(name);
console.log(DivD);
console.log(divData(4,2));