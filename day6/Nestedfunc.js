// // function outer(){
// //     function inner(){
// //         console.log("I am inner function")
// //     }
// //     inner()
// // }
// // outer()

// // var a=10;
// // function parent(){
// // // function child(){
// // var a=9
// //     console.log(this.a);
// // // }
// // // child()
// // }
// // parent()//this used to acess global scope inside function
// //  var a=10;
// function parent(){
// function child(){
// let a=9
//     console.log(a);//child local to parent
// }
//  child()
// }
//  parent()//this used to acess global scope inside function



//closure function
function parent(){
    let a=10;
    function child(){
        console.log(a);
        function child11(){
            console.log(a);
        }
        return child11;
    }
     
    let b=1;
    function child1(){
        console.log(b);
    }
    return [child,child1];
}
parent()[0]()()
parent()[1]()

// parent()()//global execution contect call stack 2 types variables all variables and function all functions

//child()