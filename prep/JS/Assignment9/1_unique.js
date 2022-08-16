arr = ['1','1','1','2','2','3','4','5','5'];

const uniqueValues = (array)=>(
    arr.filter((curr,index,ref)=>(
         ref.indexOf(curr) === index
    ))

)

console.log(uniqueValues(arr))