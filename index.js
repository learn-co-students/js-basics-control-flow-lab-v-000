// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let result
  if (distance <= 400) {
    result = 'This one is on me!'
  } else if (distance > 400 && distance <= 2500) {
    result = 'I will gladly take your thirty bucks.'
  } else if (distance > 2500) {
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(destination) {
  let result
  if (destination === 'NYC') {
    result = 'Ok, sounds good.'
  } else {
    result = 'No go.'
  }
  return result
}

function switchOnCharmFromTip(tipAmount) {
  switch (tipAmount) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
