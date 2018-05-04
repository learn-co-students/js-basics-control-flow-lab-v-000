// Write your code in this file!
function scuberGreetingForFeet(feet) {

  let result;

  if (feet <= 400) {
    result = "This one is on me!";
  } else if
  (2000 < feet && feet < 2500) {
    result = "I will gladly take your thirty bucks.";
  } else if (feet >= 2501) {
    result = "No can do.";
  }
  return result;
}

function ternaryCheckCity(location) {

  let result;

  location === "NYC" ? result = "Ok, sounds good." : result = "No go.";
  return result;
}

function switchOnCharmFromTip(amt) {
  switch (amt) {
    case "generous":
      return "Thank you so much.";
      case "not as generous":
      return "Thank you.";
    default:
    return "Bye.";
  }
}
