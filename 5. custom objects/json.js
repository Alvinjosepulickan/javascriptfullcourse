/*
When two different programs want to pass data to each other, they need a commonly accepted format of passing that data. 
There many formats available like plain text, xml, json, etc.

JSON stands for JavaScript Object Notation. JSON is a way of formatting the text in such a way that it looks like a JavaScript literal object. 



object literal

var emp_one = {
    name : "John",
    empNumber : 1001,
    emailId : "John@gmail.com"
}


json
emp_one='{"name":"John","empNumber":1001,"emailId":"John@gmail.com"}'






parse(): This function is used to convert JSON string into an JavaScript object

var json = '{ "firstName":"John", "lastName":"Doe"}';
var name= JSON.parse(json);            //will convert JSON string into an JavaScript object
console.log(name.firstName +" "+ name.lastName );



stringify(): This function is used to convert object to JSON string

var jScores = { "Java": 70, "JavaScript": 80, "CSS": 30 };  
var tScores = JSON.stringify(jScores);     //will convert object to JSON string
console.log(typeof(jScores));                   // returns Object
console.log(typeof(tScores));                   // returns String


*/
var jScores = { Java: 70, JavaScript: 80, CSS: 30 };  
var tScores = JSON.stringify(jScores);     //will convert object to JSON string
console.log(typeof(jScores));                   // returns Object
console.log(typeof(tScores));                   // returns String
console.log(jScores);
console.log(tScores);    