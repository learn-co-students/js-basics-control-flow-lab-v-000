// Write your code in this file!
function scuberGreetingForFeet(x) {
  let result
  if (x <= 400){
    result = 'This one is on me!'
  }
  else if (x > 2000 && x <= 2500){
    result = 'I will gladly take your thirty bucks.'
  }
  else if (x > 2500){
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(x) {
  let result = x === 'NYC' ? 'Ok, sounds good.' : 'No go.'
  return result
}

function switchOnCharmFromTip(x){
  let result;
  switch(x){
    case 'generous':
      result = 'Thank you so much.';
      break;
    case 'not as generous':
      result = 'Thank you.';
      break;
    default:
      result = "Bye."
  }
  return result
}
