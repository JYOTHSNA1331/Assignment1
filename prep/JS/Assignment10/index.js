const Parent ={
    fname:"ABC",
    age:22,
    show:function(msg){
        console.log("hi",msg);

    }
}
let child={
    fname:"DEF"
}

child.__proto__=Parent;
console.log(child.age);
Parent.show("hey")


//2

console.log(child.__proto__)
console.log(child.__proto__.__proto__)
console.log(child.__proto__.__proto__.__proto__)

//3

array=[1,2,3,4,5]
Array.prototype.add=function () {
    return this.reduce((add,cur)=>add+=cur,0)
}
let res=array.add()
console.log(res);

//4

function f1(){
    console.log(Object.keys(child));
    console.log(Object.getPrototypeOf(child));

}
f1()