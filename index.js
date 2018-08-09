// Write your code in this file!
function scuberGreetingForFeet(length) {
  if (length < 400) {
    return 'This one is on me!';
  } else if (length > 2000 && length < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  switch(city) {
    case `NYC`:
      return 'Ok, sounds good.';
      break;
    default:
      return 'No go.';
  }
}

function switchOnCharmFromTip(phrase) {
  switch(phrase) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
  }
}
