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

function switchOnCharmFromTip(tip){
  if (tip === "generous") {
    return "Thank you so much.";
  } else if (tip === "not as generous") {
    return "Thank you.";
  } else {
    return "Bye.";
  }
}

