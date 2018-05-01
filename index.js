// Write your code in this file!
function scuberGreetingForFeet(feet) {
  if (feet > 2500) {
    return "No can do."
  } else if (feet > 2000) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return "This one is on me!"
  }
}

function ternaryCheckCity(city){
  let message;
  city === "NYC" ? message = "Ok, sounds good." : message = "No go."
  return message;
}

function switchOnCharmFromTip(tip) {
  if (tip === "generous") {
    return "Thank you so much."
  } else if (tip === "not as generous") {
    return "Thank you."
  } else {
    return "Bye."
  }
}
