//Better way of handling async operation in js are Promises rather than using callbacks as it can cause call back hell
function delayFunction(timer){
    return new Promise((resolve)=>{
        setTimeout(resolve,timer)
    })
}

console.log("Promise method")
console.log(delayFunction(2000));

delayFunction(2000).then(()=>console.log("After 2 seconds promise will be resolved"))
console.log("promise resolution");

function divideTwoNums(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num2 == 0 ) reject("Can not be divided by 0")
        resolve(num1/num2)
    })
}

divideTwoNums(10,0).then((result)=>console.log("Result = ",result)).catch((error)=>console.log("Error",error))