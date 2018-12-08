function scuberGreetingForFeet(someValue) {
  let result
  if (someValue <= 400) {
    result = 'This one is on me!'
  }
  else if (someValue > 2500) {
    result = 'No can do.'
  }
  else if (someValue > 2000) {
    result = 'I will gladly take your thirty bucks.'
  }
  return result
}

function ternaryCheckCity(someCity) {
  let result = (someCity === 'NYC') ? "Ok, sounds good." : "No go."
  return result
}

function switchOnCharmFromTip(tip) {
    switch (tip) {
      case 'generous' :
        return "Thank you so much."
        break
      case 'not as generous' :
        return  "Thank you."
        break
      default :
        return "Bye." 
  }
}
