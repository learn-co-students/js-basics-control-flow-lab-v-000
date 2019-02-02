// Write your code in this file!

//switchOnCharmFromTip() should return "Thank you so much." if the tip is generous, should return "Thank you." if the tip is not as generous, should return "Bye." if anything else.

function scuberGreetingForFeet (feet) {
  if (feet <= 400) {
    return "This one is on me!";
  } else if (1999 < feet && feet < 2500) {
    return "I will gladly take your thirty bucks.";
    } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip (type) {
  switch (type) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}