//window obj: is helps to access the features of browser like DOM, History,Alerts & prompts etc...
// it is not the part of js but still it uses this feature bcz browser provides this features as a web api to js 

console.log(window.innerWidth);  // Gets browser window width
alert("Hello!");                 // Equivalent to window.alert("Hello!")
console.log(window.document.title); // वेबसाइट के नाम देखऽ
console.log(window.location.href); // अभी तूं कौन URL पर बा, देखऽ
setTimeout(() => {   //set timeout & interval
    console.log("5 सेकंड बाद ई मैसेज आई");
}, 5000);
