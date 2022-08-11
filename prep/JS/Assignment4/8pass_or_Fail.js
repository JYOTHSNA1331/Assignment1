
const isAllPass = (N, Arr) => 
{
  var flag=0
    for(let i=0;i<N;i++)
    {
      if(Arr[i]<32)
      {
        flag=1
        break
      }
    }
    if(flag==0)
    return "YES"
    else
    return "NO"
};
 
