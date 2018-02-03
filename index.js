// Write your code in this file!
function scuberGreetingForFeet (distanceToDestination) {
  if (distanceToDestination <= 400) {
    return "This one is on me!"
  } else if (distanceToDestination > 2000 && distanceToDestination <= 2500) {
    return "I will gladly take your thirty bucks."
  } else if (distanceToDestination > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity (destinationCity) {
  return (destinationCity === 'NYC') ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip (tipQuality) {
  switch (tipQuality) {
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return "Thank you."
    default:
      return "Bye."
  }
}
