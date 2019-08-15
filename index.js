// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let message;
    if ( distance <= 400 ){
      message = 'This one is on me!';
    }
    else if ( distance > 2000 && distance < 2500 ) {
      message = 'I will gladly take your thirty bucks.';
    }
    else if ( distance > 2500 ) {
      message = 'No can do.';
    }
  return message
}

function ternaryCheckCity(city) {
  let message = 'No go.';
  switch (city) {
    case 'NYC':
      message = 'Ok, sounds good.';
      return message;
      break;
    default:
      return message;
      break;
    }
}

function switchOnCharmFromTip(tip) {
  let message = 'Bye.';
  switch (tip) {
    case 'generous':
      message = "Thank you so much.";
      return message;
      break;
    case 'not as generous':
      message = "Thank you.";
      return message;
      break;
    default:
      return message;
      break;
  }
}
