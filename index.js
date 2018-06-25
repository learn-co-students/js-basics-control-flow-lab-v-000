// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let result
  if (distance <= 400) {
    result = "This one is on me!"
  }
  else if (distance > 2000 && distance <= 2500) {
    result = "I will gladly take your thirty bucks."
  }
  else if (distance > 2500) {
    result = "No can do."
  }
  else {
    result = distance;
  }
  return result;
}

function ternaryCheckCity(cityName) {
  let result
  if (cityName === "NYC") {
    result = "Ok, sounds good."
  }
  else {
    result = "No go."
  }
  return result;
}

function switchOnCharmFromTip(tip) {
  let result
  if (tip === "generous") {
    result = "Thank you so much."
  }
  else if (tip === "not as generous") {
    result = "Thank you."
  }
  else {
    result = "Bye."
  }
  return result;
}
