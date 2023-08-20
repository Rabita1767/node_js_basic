const events=require ("events");
class createEvent extends events
{

}
createEventObj=new createEvent();
createEventObj.once("event",()=>{
    console.log("Event occured");
})
createEventObj.emit("event");