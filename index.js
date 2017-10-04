// Write your code in this file!


function scuberGreetingForFeet(distance) {
  if (distance > 400 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (distance <= 400) {
    return 'This one is on me!';
  }
  else if (distance > 2500){
    return 'No can do.';
  }
}

function ternaryCheckCity(cityName) {
  if (cityName === 'NYC') {
    return 'Ok, sounds good.';
  } else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(tipAmount) {
  switch (tipAmount) {
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
