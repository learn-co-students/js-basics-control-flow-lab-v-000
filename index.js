// Write your code in this file!
function scuberGreetingForFeet(num) {
  let phrase
  if (num <= 400) {
    phrase = 'This one is on me!'
  }
  else if (num > 2000 && num < 2500) {
    phrase = 'I will gladly take your thirty bucks.'
  }
  else if (num > 2500) {
    phrase = 'No can do.'
  }
  return phrase
}

function ternaryCheckCity(city) {
  let response
  city === 'NYC' ? response = 'Ok, sounds good.' : response = 'No go.'
  return response
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      response = 'Thank you so much.'
      break;
    case 'not as generous':
      response = 'Thank you.'
      break;
    default:
      response = 'Bye.'
  }
  return response
}
