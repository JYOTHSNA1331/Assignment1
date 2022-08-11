
const Find_Num = (array,N,M) => 
{
  var flag=0
   for(const a of array)
   {
     if(a==M)
     flag=1
   }
   if(flag==0)
   return "NO"
   else
   return "YES"
};
 
