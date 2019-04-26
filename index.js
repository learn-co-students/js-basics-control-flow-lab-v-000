// Write your code in this file!
function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet > 2000 && feet < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip) {
  let greeting;
  switch (tip) {
    case 'generous':
      greeting = 'Thank you so much.';
      break;
    case 'not as generous':
      greeting = 'Thank you.';
      break;
    default:
      greeting = 'Bye.';
      break;
  }
  return greeting;
}
