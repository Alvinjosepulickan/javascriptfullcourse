var str="Civic";
newString="";
str=str.toLowerCase();
for(i=str.length-1;i>=0;i--)
{
    newString+=str[i];
}

if(str==newString)
{
    console.log("Pali")
}
else
{
    console.log("Not Pali")
}