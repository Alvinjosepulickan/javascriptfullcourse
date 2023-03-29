const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var date=new Date();
console.log("today is "+weekday[date.getDay()])
console.log("Current time is : "+date.getHours()+":"+date.getMinutes())