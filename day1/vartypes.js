//global scope    it can be re-initialized and re-assignable
var c=10;
c=20
console.log(c);
//local scope  
let a=10;  //cannot re-initialized but can be re-assignable
 a=2000;
console.log(a);

const b=10;    //cannot re-initialized and re-assignable
console.log(b);
//block-scope

{
    var m=10;
c=20
console.log(c);
//local scope
let n=10;
console.log(a);

const o=10;
console.log(b);
}

//ctrl+shift+i