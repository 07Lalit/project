console.log("hello lalit1");
setTimeout(function()
{
    console.log("panii2")

},10)

console.log("Namaste Duniya3")
console.log("hello lalit4");

var ans = new Promise((res, rej)=>{
    if (false){
        return res();
    }
    else{
        return rej();
    }
})

ans
.then(function(){
    console.log("resolve hogya tha")
})
.catch(function(){
    console.log("reject hua tha ")  
        
    
})