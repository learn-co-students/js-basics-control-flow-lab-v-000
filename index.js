// Write your code in this file!
function scuberGreetingForFeet(number){
  if (number <= 400){
    return "This one is on me!"
  } else if ((2500 > number) && (number > 2000)) {
    return "I will gladly take your thirty bucks."
  } else if (number > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case "generous":
    return "Thank you so much."
    break
    case "not as generous":
    return "Thank you."
    break
    default:
    return "Bye."
    break
  }
}
