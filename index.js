// Write your code in this file!
function scuberGreetingForFeet(feet) {
  let response;

  if(feet <= 400) {
    response = 'This one is on me!';
  } else if (feet > 2500) {
    response = 'No can do.';
  } else if (feet > 2000) {
    response = 'I will gladly take your thirty bucks.';
  }
  return response;
}

function ternaryCheckCity(city) {
  let response;

  city === 'NYC' ? response = 'Ok, sounds good.' : response = 'No go.';

  return response;
}

function switchOnCharmFromTip(tip) {
  let response;

  switch (tip) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    case 'thanks for everything':
      response = 'Bye.';
      break;
  }

  return response
}
