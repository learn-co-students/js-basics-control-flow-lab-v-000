// Write your code in this file!
function scuberGreetingForFeet(f) {
  if (f <= 400) {
    return 'This one is on me!'
  } else if (f >= 2000 && f < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (f > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(c) {
  return (c === 'NYC' ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(t) {
  switch (t) {
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    case 'thanks for everything':
      return 'Bye.'
      break;
  }
}
