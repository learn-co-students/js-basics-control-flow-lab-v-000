// Write your code in this file!

function scuberGreetingForFeet(length) {
  if (length <= 400) {
    return 'This one is on me!'
  } else if (length > 2000 && length <= 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (length > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip) {
  switch(tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    case 'thanks for everything':
      return 'Bye.'
  }
}
