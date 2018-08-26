function scuberGreetingForFeet(someValue) {
  let result;
  if (someValue <= 400) {
    result = 'This one is on me!'
  } else if (someValue > 2500) {
    result = 'No can do.'
  } else if (someValue > 2000) {
    result = 'I will gladly take your thirty bucks.'
  }
  return result
}

function ternaryCheckCity(someCity) {
  let result;
  if (someCity === 'NYC') {
    result = 'Ok, sounds good.'
  } else {
    result = 'No go.'
  }
  return result
}

function switchOnCharmFromTip(tipAmount) {
  let result;
  switch (tipAmount) {
    case 'generous':
      result = 'Thank you so much.';
      break;
    case 'not as generous':
      result = 'Thank you.';
      break;
    case 'thanks for everything':
      result = 'Bye.'
      break;
  }
  return result
}
