// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let result
  if (distance <= 400) {
    result = "This one is on me!";
  }
  else if (distance > 2000 && distance <= 2500) {
    result = "I will gladly take your thirty bucks.";
  }
  else if (distance > 2500) {
    result = "No can do.";
  }
  return result
}

function ternaryCheckCity(city) {
  const result = city === "NYC" ? "Ok, sounds good." : "No go.";
  return result
}

function switchOnCharmFromTip(tip) {
  switch(tip) {
    case "generous":
      return "Thank you so much.";
      break
    case "not as generous":
      return "Thank you.";
      break
    default:
      return "Bye.";
  }
}