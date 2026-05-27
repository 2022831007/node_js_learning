const path=require('path');
const myPath= '/Users/macbook/Desktop/node_js_learning_process/nodeFrom1To14/path.js';


console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.extname(myPath));
console.log(path.parse(myPath));