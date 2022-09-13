function changeText(){
    document.getElementById('demo').innerHTML = 'MERN stack'
}

console.log(document.getElementsByTagName('h1')[0].innerText)

const timer=() => {
let time = new Date()
hh = time.getHours()
mm = time.getMinutes()
ss = time.getSeconds()
let st='AM'
if(hh==0){
    hh=12
}
if(hh>12){
    hh=hh-12
    st="PM"
}
console.log(hh+':'+mm+':'+ss+' '+st)
}


timer()
setInterval(timer,1000)

function ChangeContent(){
    document.getElementById('a4').innerText = 'Welcome to elevation Academy!!'
}

function tohide(){
    var x1 = document.getElementById("text")
    x1.style.display='none'
}

var arr1 = [0,0,1,1,1,1,1,1];
let b2 = arr1.filter(x=>x==0)
console.log("count of 0's",b2.length)
console.log("count of 1's",(arr1.length-b2.length))

var arr = [1,2,,3,,-3,null,,0,,undefined,4,,4,,5,,6,,,,];
var b1=arr.filter(x=>x!=null)
let c1=b1.filter(y=>y%2==0)
console.log("No.of even numbers",c1.length)
console.log("No.of odd numbers",b1.length-c1.length)

let a="hello World"
var c=0
for(let i in a){
  if(a[i].toUpperCase=='A'||a[i].toUpperCase()=='E'||a[i].toUpperCase()=='I'||a[i].toUpperCase()=='O'||a[i].toUpperCase()=='U')
  c++
}
console.log("count of vowels in the given string",c)

let obj1={
    a:"Hello World",
    b:[1,2,3,4,5]
  }
  
  let obj2={
    c:'ABCD',
    d:[1,2,3,4,5]
  }
  console.log(obj1.b.join()==obj2.d.join()?true:false)