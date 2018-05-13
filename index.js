// Write your code in this file!
function scuberGreetingForFeet(number) {
  let result
  if (number <= 400) {
    result = 'This one is on me!'
  } else if (number > 2000 && number < 2500) {
    result = 'I will gladly take your thirty bucks.'
  } else if (number > 2500) {
    result = 'No can do.'
  }
  return result
}


function ternaryCheckCity(destination) {
  let result
  if (destination = 'NYC') {
    result = 'Ok, sounds good.';
  } else {
    result = 'No go.';
  }
  return result
}

function switchOnCharmFromTip(tip) {
  let result;
  switch (tip) {
  case 'generous':
  result = 'Thank you so much.';
  break
  case 'not as generous':
  result = 'Thank you.';
  break
  default:
  result = 'Bye.';
  }
  return result
}
