/*
Regular Expression or regex is basically a sequence of characters indicating a pattern. 
With the help of this pattern, we can search or match with other strings which follow the pattern indicated.
*/

/*
We will now see how we can validate the name using regular expressions. Let's say that the name must not have $ symbol in it. 
Here is the implementation of the validateName() function.
*/
function validateName(name){
    if(name.match(/\$/)){
        return false;
    }
    else {
        return true;
    }
}
console.log(validateName('$hi'));
console.log(validateName('hi'));

/*
Various symbols and characters are used to form regular expressions.

Three parts of Regular Expression :
    Meta characters
    Quantifiers
    Pre-defined classes (A pre-defined group of meta characters)

The above three concepts are very powerful tools to deal with almost any kind of string matching.

steps
Step 1: Create a regex pattern
Step 2: Use meta-characters like [], ^, $
    [] indicates a single character.
    For example, /h[abc]llo/ matches a single character present inside brackets
    [^abc] which will match any single character except the ones given inside brackets.
Step 3: Use quantifiers like +, *, ? and {n}
    Quantifier are symbols which specify the frequency at which a character can appear.



meta characters
https://www.ibm.com/docs/en/rational-clearquest/9.0.1?topic=tags-meta-characters-in-regular-expressions

quantifiers
https://learn.microsoft.com/en-us/dotnet/standard/base-types/quantifiers-in-regular-expressions



Predefined classes are set of meta characters grouped together and given a special symbol.
    https://www.tutorialspoint.com/javaregex/javaregex_predefined_character_classes.htm
*/
