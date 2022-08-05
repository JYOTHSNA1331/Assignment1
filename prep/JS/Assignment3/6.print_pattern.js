const Print_pattern = (N) => 
{
  var s=""
   for(i=0;i<N;i++)
   {
     for(j=0;j<N;j++)
     {
     if(i>=j)
       s+="*";
     }
      s+="\n"
   }
   
   console.log(s)
};

