function check(value) {
    console.log(value);
  }
  function getTrip() {
    setTimeout(function() {
      return "Let's go to Trip";
    }, 1500);
  }
  value = getTrip();
  check(value);
  // undefined

/*
The above function check() will return undefined because line 11 will not wait for line 10 and line 10 takes 1.5 seconds to execute.

This problem of asynchronous function can be solved using callback which we will learn next.
*/



/*
A callback is a function which will get executed automatically after some other function gets executed completely. 
Thus, it is also called as call-after.
*/


function check(value){ 
    console.log(value);
};
function getTrip (callback) {
    setTimeout(function () {
            callback("Let's go to Trip");
        }, 1500);
}
     
getTrip(check);
// Let's go to Trip
