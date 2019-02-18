// Write your code in this file!
function scuberGreetingForFeet(someNumber) {
  if (someNumber <= 400) {
    return "This one is on me!";
  } else if (someNumber > 2000 && someNumber < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(someCity) {
  if (someCity === "NYC") {
    return "Ok, sounds good.";
  } else {
    return "No go.";
  }
}

function switchOnCharmFromTip (tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}

