var x,y;
var chr='';
for(x=1; x <=5; x++)
{
   for (y=1; y <= x; y++)
    {
        if(y%2!=0){
            chr=chr+("*");
        }
        else
        {
            chr=chr+("#")
        }
         
    }
 console.log(chr);
 chr='';    
}



for(i=1;i<=5;i++)
{
    var p="";
    for(j=1;j<=i;j++)
    {
        p+=j;
    }
    console.log(p);;
}