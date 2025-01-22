// //setTimeout
// //5000ml
// window.setTimeout(()=>{
//     console.log("I am SetTimeout")
// },5000);
// //for every delay seconds we get output
// window.setInterval(()=>{
//     console.log("I am SetInterval")
// },3000);

// Example

function main(m,n){
    setTimeout(()=>{
        for(let i=0;i<n;i++){
            console.log(i);
        }
    },5000)
}
main(1,'5');
function demo(){
    console.log("a")
};
demo();