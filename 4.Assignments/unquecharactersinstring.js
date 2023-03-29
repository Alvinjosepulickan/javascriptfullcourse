/*
Write a JavaScript function to extract unique characters from a string. 
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"
*/

var str="thequickbrownfoxjumpsoverthelazydog";
var newString="";
for(i=0;i<str.length;i++)
{
    if(!newString.includes(str[i]))
    {
        newString+=str[i];
    }
}
console.log(newString);
