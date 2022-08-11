
var Count_Vowels= (S) => 
{
      let N = S.length,cv=0;
      for(let i=0;i<N;i++)
      {
        if((S[i]>='a'&&S[i]<='z') || (S[i]>='A' && S[i]<='Z'))
        {
          if(S[i].toLowerCase()=='a' || S[i].toLowerCase()=='e' || 
             S[i].toLowerCase()=='i' || S[i].toLowerCase()=='o' ||
             S[i].toLowerCase()=='u')
             cv++
        }
      }
      return cv
};
var Count_Consonants= (S) => 
{
    let N = S.length,co=0;
      for(let i=0;i<N;i++)
      {
        if((S[i]>='a'&&S[i]<='z') || (S[i]>='A' && S[i]<='Z'))
        {
          if(S[i].toLowerCase()!='a' && S[i].toLowerCase()!='e' && 
             S[i].toLowerCase()!='i' && S[i].toLowerCase()!='o' &&
             S[i].toLowerCase()!='u')
             co++
        }
      } 
      return co
};
 
