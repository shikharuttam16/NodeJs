function division(num1,num2){
    try {
        if(num2 == 0) throw new Error("Num2 can now be zero")
        if(num1 == undefined || num2 == undefined) throw new Error("Number is undefined")
        console.log(num1/num2);
    } catch (error) {
        console.log("Error",error);
        return null
    }
}

(async ()=>{
    await division(20,10)
})()