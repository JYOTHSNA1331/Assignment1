// arr = ['1','1','1','2','2','3','4','5','5'];
// var frequency = {}

// for(var i=0;i<arr.length;i++)
// {
//     var num = arr[i]
//     frequency[num] = frequency[num] ? frequency[num]+1 : 1;
// }

// console.log(frequency)


arr = ['1','1','1','2','2','3','4','5','5'];
var count = {}

arr.forEach((e) => (count[e] ? count[e]++ : count[e]=1 ))

console.log(count)