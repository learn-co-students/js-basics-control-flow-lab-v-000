// Write your code in this file!
function scuberGreetingForFeet(num) {
  let msg
  if (num < 400) {
    msg = 'This one is on me!'
  } else if (num >= 2000 && num < 2500) {
    msg = 'I will gladly take your thirty bucks.'
  } else if (num > 2500) {
    msg = 'No can do.'
  }
  return msg
}

function ternaryCheckCity(city) {
  return (city === 'NYC' ? 'Ok, sounds good.' : 'No go.')
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      msg = 'Thank you so much.'
      break;
    case 'not as generous':
      msg = 'Thank you.'
      break;
    default:
      msg = 'Bye.'
      break;
  }
  return msg
}
