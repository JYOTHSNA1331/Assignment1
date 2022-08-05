const Number_Sum = (N) => 
{
	var sum=0,i;
	while(N>0)
	{
	  i = N%10
	  sum=sum+i
	  N=parseInt(N/10)
	}
	
	return sum;
};

