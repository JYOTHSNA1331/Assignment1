
const findEvenOdd = (N, Arr) => 
{
    var se=0,so=0;
   for(const values of Arr)
   {
     if(values%2==0)
     se=se+values
     else
     so=so+values
   }
   const b = new Array(se,so)
   return b
};
 
