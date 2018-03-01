// Write your code in this file!
function scuberGreetingForFeet(ride) {
  if(ride <= 400) {
    return 'This one is on me!'
  }
  if(ride > 2500) {
    return 'No can do.'
  }
  if(ride > 2000) {
    return 'I will gladly take your thirty bucks.'
  }
}

function ternaryCheckCity(c) {
  return c === 'NYC' ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(t) {
  switch(t) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
      break;
  }
}
