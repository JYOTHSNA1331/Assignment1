const timer=() => {
let time = new Date()
hh = time.getHours()
mm = time.getMinutes()
ss = time.getSeconds()
console.log(hh+':'+mm+':'+ss)
}

timer()
//setInterval(timer,1000)

