 
var Reverse_Number = (N) => 
{
  
let res = 0;
      let last;
      while(N!==0){
        last = N % 10;
        res = res * 10 + last;
        N = Math.floor(N/10);
      }
    return res;
};
 
