var str="Rama Krishna Narayan";
var j=str.split(" ");
var name="";
for(i=0;i<j.length-1;i++)
{
    //console.log(j[i]);
    name+=j[i][0]+"."+" "
}
name+=j[j.length-1];
console.log(name);