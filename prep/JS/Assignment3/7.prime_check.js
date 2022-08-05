
const Prime_Check = (N) => 
{
  var count=0
   if(N===1){
  return "NO"
}
else if(N===2){
    return "YES"

}
else{
  for(i=2;i<N/2;i++){
    if(N%i===0){
      count++;
      break;
    }
    
  }
  if(count>0)
    return "NO"
  else
    return "YES"
}
	
};

