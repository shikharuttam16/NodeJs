// Async await is nothing but syntactical sugar over promises
// Every async function return a Promise
// Await function returns pause the operation unless promise is resolve

function delayFunction(time){
    return new Promise((resolve,reject)=>setTimeout(()=>{
        resolve(true)
    },time))
}

async function delayGreet(name){
    delayFunction(5000).then((res)=>{
        if(res) console.log(name)
    }
    )
    await delayFunction(2000)
    console.log("Hey Amit");
   
}

delayGreet("Hi Shikhar")