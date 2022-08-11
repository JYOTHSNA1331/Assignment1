
const countCharacters = (S) => 
{
  var ca=0,cd=0;
  
    for(let i=0;i<S.length;i++)
    {
         if(S[i]=='A')
         ca++
         else if(S[i]=='D')
         cd++
    }
    var b=new Array(ca,cd)
    return b
};
 
