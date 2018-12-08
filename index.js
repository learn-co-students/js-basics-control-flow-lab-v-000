// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let result;
  if (someValue > 2500) {
    result = "No can do."
  }
  else if (someValue > 2000) {
    result = "I will gladly take your thirty bucks."
  }
  else if (someValue <= 400) {
    result = "This one is on me!"
  }
  return result
}

function ternaryCheckCity(someCity) {
  let result;
  someCity == "NYC" ? result = "Ok, sounds good." : result = "No go."
  return result
}

function switchOnCharmFromTip(someCharm) {
  let result;
  switch (someCharm) {
    case 'generous':
    result = "Thank you so much."
    break;
    case 'not as generous':
    result = "Thank you."
    break;
    default:
    result = "Bye."
    break;
  }
  return result
}
