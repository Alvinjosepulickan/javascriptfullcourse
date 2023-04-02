function checkEmail(email)
{
    if(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    {
        console.log("Matches the pattern");
    }
    else
    {
        console.log("Not matching");
    }
}
var email1="JohnDoe.12#4@gmail.com";
checkEmail(email1);
var email2="John..Doe12#4@gmail.com"
checkEmail(email2);