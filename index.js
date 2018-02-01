// Write your code in this file!

// If ride is <= 400 "This one is on me!"
// Distance over 2000 feet, but under 2500
// Check if feet greater than 2000 && feet less than 2500.

function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return "This one is on me!"
  } else if (feet > 2000 && feet < 2500) {
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do."
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}
