const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('please turn off the motor!');
  setTimeout(() =>{
    console.log('Please turn off the motor!its a gentle reminder');
  },3000);
});
console.log("the script is running");
 myEmitter.emit('WaterFull');
