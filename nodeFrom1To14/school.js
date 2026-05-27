const EventEmitter=require('events');
// const emitter = new EventEmitter();
class School extends EventEmitter{
 startPeriod(){
    console.log('class started');
    //raise event when bell ring
    setTimeout(()=>{
    this.emit('bellRing',{
period:'frist',
text:'period ended',
    });
},2000);

}
}
module.exports = School;