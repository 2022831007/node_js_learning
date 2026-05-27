//fs w3 school
const fs=require('fs');
//built a file
fs.writeFileSync('myfile.txt','hello kitty');
//add a new file
fs.appendFileSync('myfile.txt','  how are you kitty');
//read the file,it will give the output with buffer
 const data=fs.readFileSync('myfile.txt');
console.log(data);
//to read the original data without buffer
console.log(data.toString());
//for asynchronus way,this is more imp than anything
fs.readFile('myFile.txt',(err,data)=>{
    console.log(data.toString());
});
console.log('hello');