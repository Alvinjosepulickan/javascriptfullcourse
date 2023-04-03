/*
install karma and jsmine core
    npm install -g karma jasmine-core
start  karma 
    karma  init
        answer all questions
        create karma.conf.js file 
    karma start
*/



/*
meets the requirements that guided its design and development,
responds correctly to all kinds of inputs,
achieves the general result its stakeholders desire



JavaScript is a powerful programming language that has no compiler and no static type-checking in the code. 
As JavaScript developers we continuously write new code or extend the existing code. In either of the scenarios, 
    if code fails, as developers we can see it only on the browser during execution and not before that.
To debug or write endless console statements in our code are manual ways of testing the JavaScript code. This process is too slow. 
We should have automated ways of finding the bug in the code and avoid the chaotic and time consuming debugging. 
Automated testing will enable us to programmatically check or test the functionality of our code before we execute it and watch it fail.


*/

/*
Jasmine components
*/
function totalTravelFare(baseFare, taxPercentage){
	var finalFare;
	finalFare = baseFare*(1+taxPercentage/100);
	return finalFare;
}
/*

Step 1: A test suite should be created 

Step 2: Test specs should be created for all the possible scenarios

Step 3: Test specs should be created in order to check whether the result variable is defined or not

Step 4: Test suite should be executed with the help of Karma
*/

/*
A test suite is a grouping of relevant test cases which are executed together. 
We can create a test suite with the help of built-in function describe()
describe(title, function(){})
    It is a global Jasmine function
    It helps in defining the test context by creating a new test suite
    It accepts two parameters:
    A title (of string type) or name of the test suite
    A function containing specs which belong to this suite
*/
describe('TotalTravelFare calculation Suite:',function(){
    it('Test Case 1: Inputs are correct',function(){
        var j=1000;
       expect(totalTravelFare(j,20)).toEqual(1200);
       expect(totalTravelFare(j,20)).toEqual(1200);
       expect(totalTravelFare(j,30)).toEqual(1300);
    });
})

/*
expect()
    It is a global Jasmine function that helps in writing the assertions.
    It takes only one parameter: Actual value to be tested
toEqual()
    Matcher is used to compare the actual and expected output
*/
/*
Matcher
    Matchers are the JavaScript function that does a Boolean comparison between an actual output and an expected output.
    https://jasmine.github.io/api/2.7/matchers.html

*/