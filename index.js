// Write your code in this file!
function scuberGreetingForFeet(feet) {
  if( feet < 2000) {
    return "This one is on me!"
  } else if(feet > 2000 && feet < 2500) {
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do."
  }
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip) {
  switch(tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}

// * `switchOnCharmFromTip()` — Use a `switch` statement
// to return a different response based on the
// generosity of the passenger's tip.
