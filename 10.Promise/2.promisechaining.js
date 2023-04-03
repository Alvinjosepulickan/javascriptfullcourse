function bookFlight() {
    return new Promise(function (resolve) {
        setTimeout(resolve(5600), 2000);
    })
}
function bookHotel(flightPrice) {
    return new Promise(function (resolve) {
        setTimeout(resolve(7000 + flightPrice), 1000);
    })
}
async function getTotal(){
    var flightData=await bookFlight();
    var cumulativeData=await bookHotel(flightData);
    console.log(" Total is " + cumulativeData) 
    }
getTotal()
