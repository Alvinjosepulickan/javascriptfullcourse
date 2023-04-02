var str="14/03/1879";
console.log(getDate(str));
function getDate(str)
{
    var m = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    return (m) ? new Date(m[3], m[2]-1, m[1]) : null;
}