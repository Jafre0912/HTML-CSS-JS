// ECMAScript (ES) is the official name for JavaScript.

//ReactJs:- is a javascripts library using it u can build userinterface by the help of components like header, footer, navbar etc...
// it works on single page application (SPA)
//SPA: the application where all content will be on single page and the url will update to gate in different section but webpage will not refresh
//multi page applications: the entire webpages and url will change 
//one page website: all content will be on single home page 

/* REACT(Developed and maintained by facebook)
1) it works on Virtual DOM 

2)Viratula DOM: it is the cope of real DOM... whenever react makes any change/update in componanets that only react does not reload the full website it only update that part only that has been changed in the component... bby the help of virtual DOM
3) and jo v change hota hh uske vDom real dom me update krr deta hh 

4) realDOM: this is real stracture of browser 



5) npm init -y : creates package.json file in our folder 

6) package.json : where we show which files need to run as a main file 
7)JSX: js+xml


8) nodemon: this command automatic change our file data whenever we try to change or update it
9) npm: node package manager : it keeps all the modules/libraries in the systems (It installed all the packages globally )
        npm install react  # Installs React in node_modules
        npm install -g nodemon  # Installs nodemon globally    
        npm -v (to check version)

 
10) npx: node package executor: it keeps all the module directly in the folder not in the systems(it doesnot installed globally or in system)
          npx create-react-app my-app  
          npx -v

*/

//5) DEFAULT EXPORT : default export allows you to export a single value like function only, class only, object only, or variable) 
    //eg: 
    let sumData=(a,b)=>a+b;
    console.log(sumData(2,3));
    export default sumData;
//   Named export: allows to export multiple
let subdata=(x,y)=>(x-y);
console.log(subdata(5,4));
export{subdata}; 



//package.json: it keeps the dependecies of our packages 
//package.lock.json: it keeps the detailed description of installed packages dependecies 