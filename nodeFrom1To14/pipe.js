const fs=require('fs');
// const ourReadStream=fs.createReadStream(`${__dirname}/myfile.txt`);
// const ourWriteStream=fs.createWriteStream(`${__dirname}/output.txt`);
// // ourReadStream.on('data',(chunk)=>{
// ourWriteStream.write(chunk);
// });
//same work as write but in easy way
// console.log('hello');
// ourReadStream.pipe(ourWriteStream);
const http = require('http');
const server = http.createServer((req,res)=>{
    const myReadStream = fs.createReadStream(`${_dirname}/myfile.txt`,'utf8');
    myReadStream.pipe(res);
});
server.listen(5000);
console.log('listening on port 5000');