 let online=window.navigator.onLine
 new Promise((resolve,reject)=>{
    setTimeout(()=>{
if(online==true)
{
    return resolve()
}
else{
    return reject()
}
      },5000)
 })
 .then(()=>{console.log("Online...")})
 .catch(()=>{console.log("Offline...")})

 