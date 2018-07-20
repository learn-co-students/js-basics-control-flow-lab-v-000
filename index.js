function scuberGreetingForFeet(someValue) {
  let value
  if (someValue < 400) {
    value = "This one is on me!"
  } else if (someValue > 2500) {
    value = "No can do."
  } else {
    value = "I will gladly take your thirty bucks."
  }
  return value
}

function ternaryCheckCity(city) {
  let result
  (city == "NYC") ? result = "Ok, sounds good." : result = "No go."
  return result
}

function switchOnCharmFromTip(tip) {
  let response
  switch (tip) {
    case 'generous':
      response = "Thank you so much."
      break;
    case 'not as generous':
      response = "Thank you."
      break;
    default:
      response = "Bye."
      break;
  }
  return response;
}
