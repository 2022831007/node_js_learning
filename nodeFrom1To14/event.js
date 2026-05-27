// const EventEmitter=require('events');
// const emitter = new EventEmitter();
// const startPeriod=require('./school');
const School=require('./school')
const school=new School();
//register a listener for bellRing event
 school.on('bellRing',(period) => {
    console.log(`we need to run because ${period}!`);
 });


//raise an event
// setTimeout(()=>{
//     emitter.emit('bellRing','second period ended');
// },2000);
// emitter.emit('bellRing');
//for multiple parameter,we have to create object
// emitter.emit('bellRing',({period,text})=>{
//     console.log(`we need to run because ${period} ${text}`);
// });
// setTimeout(()=>{
//     emitter.emit('bellRing',{
// period:'frist',
// text:'period ended',
//     });

// },2000);
// const school=new School();

school.startPeriod();