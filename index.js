function scuberGreetingForFeet(distance) {
  let greeting

  if (distance < 400) {
    greeting = "This one is on me!"
  }
  else if (distance >= 2500) {
    greeting = "No can do."
  }
  else if (distance > 2000 ) {
    greeting = "I will gladly take your thirty bucks."
  }
  return greeting
}

function ternaryCheckCity(city) {
  return (city == "NYC" ? "Ok, sounds good." : "No go.")
}

function switchOnCharmFromTip(tip) {
  let farewell
  switch (tip) {
    case "generous":
      farewell = "Thank you so much."
      break;
    case "not as generous":
      farewell = "Thank you."
      break;
    default:
      farewell = "Bye."
  }
  return farewell
}
