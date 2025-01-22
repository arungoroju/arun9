//using array declaration
let arr=[10,"h",true,1n,undefined]
arr[0]=1;
console.log(arr);

//using new keyword
let arr1=new Array(10,10,"h")
console.log(arr1);

//creating object 
//creation using declaration
let obj={
    name:"hari",
    rollno:1,
    arr:[10,10,20],
    dem:function(){
        console.log("hey !");
    }
    
    }
console.log(obj);
console.log(obj.name);
console.log(obj.dem());

//object using constructor function
// used to create object
function obj1(name,id){
    this.name=name;
    this.id=id;
}
let o=new obj1("hari",1);
console.log(o);