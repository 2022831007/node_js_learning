const _ = require('lodash');

console.log(_.last([1,2,3]));
console.log(global);
const people = require('./people');
console.log(people);
setTimeout(()=>{
    console.log('test');
},(1000));
console.log(__dirname);
console.log(__filename);