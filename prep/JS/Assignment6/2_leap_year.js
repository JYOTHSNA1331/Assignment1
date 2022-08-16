 
var Check_Leap = (year) => 
{
 
 return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) ? "Leap Year" : "Non Leap Year"

};
 
