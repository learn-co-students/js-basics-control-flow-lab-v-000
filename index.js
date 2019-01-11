function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    greeting = 'This one is on me!';
  }
  else if (someValue > 400 && someValue <= 2500) {
    greeting = 'I will gladly take your thirty bucks.';
  }
  else {
    greeting = 'No can do.';
  }
  return greeting
}

function ternaryCheckCity(destination) {
  response = (destination === 'NYC') ? 'Ok, sounds good.' : 'No go.';
  return response
}

function switchOnCharmFromTip(tip) {
  switch(tip) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.'
  }
  return response
}

