function scuberGreetingForFeet(distanceInFeet) {
  let greeting
  if (distanceInFeet <= 400) {
    greeting = 'This one is on me!';
  } else if (distanceInFeet > 2500) {
    greeting = 'No can do.';
  } else if (distanceInFeet > 2000) {
    greeting = 'I will gladly take your thirty bucks.';
  } else {
    greeting = 'Hmm, not sure what to do here.';
  }
  return greeting
}



function ternaryCheckCity(city) {
  let message;
  city === 'NYC' ? (message = 'Ok, sounds good.') : (message = 'No go.');
  return message
}


function switchOnCharmFromTip(tipGenerosity) {
  let response;

  switch(tipGenerosity) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
      break;
  }
  return response
}
