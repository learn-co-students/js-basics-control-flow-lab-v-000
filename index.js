// Write your code in this file!
function scuberGreetingForFeet(x) {
  if (x<=400) {
    return "This one is on me!"
  }

  if (x > 2000 && x < 2500) {
    return "I will gladly take your thirty bucks."
  }

  if (x >= 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(city) {
  let answer = city === "NYC" ? "Ok, sounds good." : "No go."
  return answer
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much."
      break;
    case "not as generous":
      return "Thank you."
      break;
    default:
      return "Bye."
      break
  }
}
