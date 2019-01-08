// Write your code in this file!
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    result = 'This one is on me!';
  } else if (distance <= 2000) {
    result = ' ';
  } else if (distance <= 2500) {
    result = 'I will gladly take your thirty bucks.';
  } else {
    result = 'No can do.';
  }
  return result;
}

function ternaryCheckCity(city) {
  city === 'NYC' ? (result = 'Ok, sounds good.') : (result = 'No go.');
  return result;
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      result = 'Thank you so much.';
      break;
    case 'not as generous':
      result = 'Thank you.';
      break;
    default:
      result = 'Bye.';
      break;
  }
  return result;
}
