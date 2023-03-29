var avergae=0;
var totalmark=0;
var  morethanavergae=0
function find_more_than_average(mark){
    if(mark>avergae)
    {
        morethanavergae+=1;
    }
    
}
list_of_marks = [12,18,25,24,2,5,18,20,20,21]
list_of_marks.forEach(element => {
    totalmark+=element;
});
avergae=totalmark/list_of_marks.length;


var frequenccy=[]


for(i=0;i<list_of_marks.length;i++)
{
    find_more_than_average(list_of_marks[i])
}
console.log((morethanavergae*100)/list_of_marks.length);