// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return 'This one is on me!';
  } else if (1999 < someValue && someValue < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return 'No can do.';
  }

}

function ternaryCheckCity(city) {
  if (city === "NYC") {
    return 'Ok, sounds good.';
  } else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(tip) {
  let message
  if (tip === "generous") {
    message = "Thank you so much.";
  } else if (tip === 'not as generous') {
    message = "Thank you.";
  } else {
    message = "Bye."
  }
  return message
}
