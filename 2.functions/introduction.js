/*
function add(p,j)
{
    for(i=0;i<arguments.length;i++)
        console.log(arguments[i]);
}
console.log(add(1,2));


console.log(funVariable(1,2));
funVariable= function myFunc(num1,num2) { 
    num3=num1*num2;
    return num3
}


console.log(funVariable(1,2));
*/





//passing function as parameter

/*

function welcome(){console.log("Hello World");}
function goodbye(){console.log("See you later");}
function greet(choice){
choice();
}
greet(welcome);
greet(goodbye);





//returing  function 
function greet(){
	var hello=function welcome(){console.log("Hello World");}
	return hello;
}
var retFunc=greet();
retFunc();




*/










//annonymous function
function greet(choice){
	choice();
}
greet(function(){ console.log("Hello World")});
// Hello World










/*
Higher Order Functions
Functions which can either accept other functions as parameters or return other functions as parameters are called as Higher Order Functions. Many in-built functions in JS are Higher Order Functions.

 

First Class Citizen:
Any object which can be assigned, passed as a parameter and returned from a function is called a First Class Citizen in a programming language. Thus, all functions are First Class Citizens in JS.

*/