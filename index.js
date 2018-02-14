// Write your code in this file!

// gives customers a free sample if the ride is less than or equal to 400 feet

// if the ride is >= 400 feet
// return 'This one is on me!'
// else 
// nothing


function scuberGreetingForFeet(rideLength) {
  if (rideLength <= 400) {
    return "This one is on me!";
  } else if (rideLength >= 2000) {
    return "I will gladly take your thirty bucks.";
  } else if (rideLength >= 2500) {
    return "No can do."
  }
}
