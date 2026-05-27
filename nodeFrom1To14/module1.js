// (function(){

let people1 = ['sakib','tamim','mashrafe'];
let a=6;
function test(){
    console.log("test");
}
// console.log(module)
// module.exports = people1;
// return module;
// }); //ifi function,indivisible function
//multiple value export 
module.exports={
    people1:people1,
    a:a,
    test:test
}