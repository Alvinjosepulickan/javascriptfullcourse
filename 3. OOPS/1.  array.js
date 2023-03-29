var arrayObject=[];
arrayObject[0]="hi";
console.log(arrayObject[0]);




placesToVisit = ["Paris", "New York", "Switzerland"];
console.log(placesToVisit.indexOf("Paris"));
console.log(placesToVisit[0]);
// Paris
console.log(placesToVisit[2]);
// Switzerland




numArr=[100,200,300];
var [a,b,c]=numArr;
// the numArr is now destructured and individual values are stored in the individual variables.
console.log(a);
console.log(b);
console.log(c);



//array function
places = ["Paris", "New York"];




//push

console.log("push");
places.push("Switzerland");
console.log(places);
// ["Paris", "New York", "Switzerland"]




//pop
console.log("pop");
console.log(places);




//indexOf

console.log("indexof");
console.log(places.indexOf("New York"));





//splice

console.log("splice");
places.splice(1, 2); // This will remove 2 elements from index 1
console.log(places);
// ["Paris"]






//foreach
//forEach() is used to interate over an array. This is a Higher Order Function. It will take a function and invoke that function on all elements of array

console.log("foreach");
places.forEach(function(place) {
    console.log(place);
    }
);
// Paris
// New York
// Switzerland








/*
map()

The map() array function generates a new array. It iterates over each element in the array, just like forEach. It invokes a function on each element, just like forEach.

But the difference, is forEach just invokes function on each item in the array. It does not create a new array. Hence, map()creates a new array based on what the function does.
*/

console.log("map");
placesToVisit= ["Paris", "New York",  "Switzerland"];
function display_uppercase(place) {
    return place.toUpperCase();
}
placesUpparCase = placesToVisit.map(display_uppercase);
console.log(placesUpparCase);
console.log(placesToVisit);






/*
 filter()

What if we want to get all words whose length is greater than 5?

For this we can use filter(). filter accepts a function. It iterates over each element and creates a sub array if the function returns true.
*/
console.log("filter");
placesToVisit= ["Paris", "New York",  "Switzerland"];
function filterPlaces(val) {
    if (val.length >= 5) {
        return "hi";
    }
    else{
    return 0;
    }
}
filteredPlaces = placesToVisit.filter(filterPlaces);
console.log(filteredPlaces );






/*
find()

Array has a method called find(). It returns the first element in the array which satisfies a given condition. 
It takes a callback. It executes the callback for each element in the array. 
If the callback returns true, then find returns the element for which the callback returned true and stops further iteration. 
If it was false for all elements, it returns undefined.
*/
function findPlaces(val) {
    if (val.length > 5) {
        return true;
    }
}
foundPlaces = placesToVisit.find(findPlaces);
console.log(foundPlaces);












/*
Arrow in forEach()
*/
placesToVisit.forEach(place => console.log("Trip to " + place));



/*
Arrow in map()
*/

placesUpperCase = placesToVisit.map(place => place.toUpperCase());
console.log(placesUpperCase);


/*
Arrow in filter()
*/
filteredPlace = placesToVisit.filter(place => place.length > 5);
console.log(filteredPlace);



/*
 Arrow in find()
 */
 findPlace = placesToVisit.find(place => place.length > 5);
 console.log(findPlace);