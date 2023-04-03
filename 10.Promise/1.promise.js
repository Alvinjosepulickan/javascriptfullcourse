/*
A promise can be:
    resolved - promise succeeded
    rejected - promise failed
    pending - Hasn't fulfilled or rejected yet
*/
/*
Promise can be created using  new Promise()
*/

function getTrip(){
    return new Promise(function(resolve){
      setTimeout(function() {
        resolve("Lets go to Trip");
      }, 2000);
    });
  };

  getTrip().then(
    function(futureData){
        console.log(futureData);
    }
);

/*
Resolving a promise is valid only if nothing goes wrong. 
What if something goes wrong and we are not able to keep the promise? 
    Then we need to reject the promise instead of resolving the promise. 
So instead of returning the promised data, we can return an error. In any new Promise we can define resolve and reject both.
*/
function getTrip(location) {
    return new Promise(function(resolve, reject) {
      if (location == "ooty") {
          resolve("Trip to " + location);
      } else {
        reject(Error("Some error occured"));
      }
    });
  }

  getTrip("ooty").then(
    function(data) {
      console.log(data);
    },
    function(error) {
      console.log(error);
    }
  );
  // Trip to ooty
  getTrip("coorg").then(
    function(data) {
      console.log(data);
    },
    function(error) {
      console.log(error.message);
    }
  );
  // Error: Some error occurred
    