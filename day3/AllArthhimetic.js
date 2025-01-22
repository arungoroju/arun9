function Arthimetic(a,b,operation){
    switch(operation){
        case 'add':
            return a+b;
           
        case 'sub':
            return a-b;
           
        case 'mul':
            return a*b;
            
        case 'div':
            return a/b;
           
        default:
            return 'Enter Valid data !';
    }
}
let a=parseFloat(prompt('Enter a value :'));
let b=parseFloat(prompt('Enter b value :'));
let operation=prompt('Enter Operation to be performed :');
var r=Arthimetic(a,b,operation);
console.log("Result is :"+r);