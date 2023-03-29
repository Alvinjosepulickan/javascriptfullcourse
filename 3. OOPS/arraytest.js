var sum=0;
var num=[1,2,3,4]
function Add(i)
{
    sum+=i;
}
num.forEach(x=>sum=x);
console.log(sum);