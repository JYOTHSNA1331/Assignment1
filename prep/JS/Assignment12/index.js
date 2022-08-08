console.log("Hello world!");  // output: Hello world!



function add(a,b)
{
    return a+b;
}

console.log(add(3,4));  // output: 7

let sub = (a,b) => {
    return (a-b)
}

console.log(sub(7,4)); // output: 3

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl (); // Result: undefined

var x1 = 21;
girl1 ();
console.log(x1)
function girl1() {
    console.log(x1);
    var x1 = 20;
};   //Result: undefined


// var x2 = 21;
// a();
// b();
// console.log(a);
// a = function() {
    
//    x2 = 20;
//   console.log(x2);
// };
// b = function() {
    
//     x2 = 40;
//    console.log(x2);
// };    // result: Refernce Error

var p=1
function fact(n)
{
    if(n==0)
    console.log("1")
    else{
    for(let i=1;i<=n;i++)
    {
        p = p*i;
    }
    console.log(p)
}
}
 fact(5);  // Result:120
