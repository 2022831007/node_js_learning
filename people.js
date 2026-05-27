let people = ['sakib','tamim','mashrafe'];
let a =6;
module.exports= people;
const eventEmiter=  require('events');
const emitter = new eventEmiter();
emitter.on('bellRing',({period,text})=>{
    console.log(`we need to run because ${period} ${text}`);
});
setTimeout(() => {
    emitter.emit('bellRing',{
        period : 'first',
        text : 'period ended',
    });
},2000);
