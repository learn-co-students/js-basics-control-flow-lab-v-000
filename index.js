function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!"
  }
  else if (distance > 2000 && distance < 2500) {
    return "I will gladly take your thirty bucks."
  }
  else {
    return "No can do."
  }
}

function ternaryCheckCity(city) {
  return (city === "NYC" ? "Ok, sounds good." : "No go.");
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case tip = 'generous':
      return "Thank you so much."
      break;
    case tip = 'not as generous':
      return "Thank you."
      break;
    default:
      return "Bye."
  }
}
