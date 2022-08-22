const ele1 = document.getElementById("text");
console.log(ele1);

const ele2 = document.getElementsByTagName("h1");
console.log(ele2[0]);

const ele3 = document.getElementsByClassName("box");
console.log(ele3[0]);

const ele4 = document.getElementsByTagName("h1")
ele4[0].innerText = "Hello World"
console.log(ele4[0].innerHTML)


function changeDirection(){
    const ele=document.getElementsByClassName("parent")
    ele[0].style.flexDirection = "column"
}

console.log(`window - When JavaScript is executed inside the browser, the window object is the JavaScript Global object.The window object represents the browser window.
  document -The document object is a property of the window object.The document object represents the HTML document loaded in that window.`)


const ele5=document.createElement("h1")
ele5.innerText="Hello"
ele5.style.color="red";
ele5.id="heading";
console.log(ele5);


function ChangeText() {
    const ele6=document.getElementsByTagName("h1");
    ele6[2].innerText="Welcome to Elevation academy"
}

function printValue(){
    const element = document.querySelector("#year");
    const element1 = element.value;
    document.querySelector("#printValue").append(element1);
}

function displayclock (){
    let time = new Date();
  let hrs = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  
  
  if(hrs>12){
    hrs = hrs -12;
  }
  
    if(hrs==0){
      hrs = 12;
    }
    document.getElementById("clock").innerHTML = hrs + ":" + min + ":" + sec;
  }
  
  //setInterval(displayclock,1000)

  function emailCheck() {
    let a = document.getElementById("email").value;
    if (!a.endsWith("prepbytes.com")) {
        let b = document.getElementById("emailcheck");
        b.style.display = "inline";
    } else {
        let b = document.getElementById("emailcheck");
        b.style.display = "none";
    }
}

function numberCheck() {
    let a = document.getElementById("phoneno").value;
    if (!a.startsWith("91")) {
        let b = document.getElementById("startcheck");
        b.style.display = "inline";

    } else {
        let b = document.getElementById("startcheck");
        b.style.display = "none";
    }
    if (a.length == 10) {
        let b = document.getElementById("digitcheck");
        b.style.display = "inline";
    } else {
        let b = document.getElementById("digitcheck");
        b.style.display = "none";
    }
}

function bYearCheck() {
    let a = document.getElementById("byear").value;
    if (a < 1995) {
        let b = document.getElementById("byearcheck");
        b.style.display = "inline";
    } else {
        let b = document.getElementById("byearcheck");
        b.style.display = "none";
    }
}