console.log("Hello world!");


function add(a,b)
{
    return a+b;
}

console.log(add(3,4));

let sub = (a,b) => {
    return (a-b)
}

console.log(sub(7,4));

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

var x1 = 21;
girl1 ();
console.log(x1)
function girl1() {
    console.log(x1);
    var x1 = 20;
};


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
// };

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
 fact(5);