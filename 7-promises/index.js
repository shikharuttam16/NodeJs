function delayFunction(timer){
    return new Promise((resolve)=>{
        setTimeout(resolve,timer)
    })
}

console.log("Promise method")
console.log(delayFunction(2000));

delayFunction(2000).then(()=>console.log("After 2 seconds promise will be resolved"))
console.log("promise resolution");

