// //setTimeout
// //5000ml
// window.setTimeout(()=>{
//     console.log("I am SetTimeout")
// },5000);
// //for every delay seconds we get output
// window.setInterval(()=>{
//     console.log("I am SetInterval")
// },3000);

// const { reject } = require("async");

// Example

function main(m,n){
    new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(isNaN(m)||isNaN(n)){
            return reject();
        }
        for(let i=0;i<n;i++){
            console.log(i);
        }
        return resolve();
    },5000)
})
.then(()=>console.log("Resolved !"))
.then(()=>console.log("Hey !"))

.catch(()=>console.log("error occured !"))
}
main(1,2);
