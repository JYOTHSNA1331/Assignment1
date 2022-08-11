
function Unique_Shirts (arr,N) {
    let unique=arr.filter((value)=>arr.indexOf(value)===arr.lastIndexOf(value));
      return (unique.length)
   }
   
   