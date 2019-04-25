// Write your code in this file!
function scuberGreetingForFeet(distanceFeet) {
  let driverMessage;
  if (distanceFeet <= 400) {
    driverMessage = "This one is on me!"
  }
    else if (distanceFeet >= 2000 && distanceFeet < 2500) {
      driverMessage = "I will gladly take your thirty bucks."
    }
      else {
      driverMessage = "No can do."
      }
    return driverMessage;
}

function ternaryCheckCity (city) {

  let driverMessage;

  city === "NYC" ? (driverMessage = "Ok, sounds good.") : (driverMessage = "No go.")

  return driverMessage;
}

function switchOnCharmFromTip (tip) {

  let driverMessage;

  switch (tip) {
    case "generous" :
      driverMessage = "Thank you so much."
      break;
    case "not as generous" :
      driverMessage = "Thank you."
      break;
    default:
    driverMessage = "Bye."
      break;

  }
  return driverMessage;
}
