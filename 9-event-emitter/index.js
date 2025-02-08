//In socket Io these types of events are used very much these type of event emitters are used there
const EventEmitter = require('events')
const myFirstEmitter = new EventEmitter()

//Register a listener 
myFirstEmitter.on('greet',(name)=>{
    console.log(`Hello ${name}`)
})

myFirstEmitter.emit('greet','Shikhar Uttam')