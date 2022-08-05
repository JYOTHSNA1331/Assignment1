const Find_Digits = (N) => 
{
  var c=0;
  while(N>0)
  {
    N=parseInt(N/10);
    c++
  }
  return c
};

