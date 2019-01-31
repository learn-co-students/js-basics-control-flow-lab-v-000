// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let response;
  if (distance <= 400) {
    response = 'This one is on me!';
  }
  if (distance >= 400) {
    response = 'I will gladly take your thirty bucks.';
  }
  if (distance > 2500) {
    response = 'No can do.';
  }
  return response
}

function ternaryCheckCity(city) {
  let response;
  city === 'NYC' ? (response = 'Ok, sounds good.') : (response = 'No go.')
  return response
}

function switchOnCharmFromTip(amount) {
  switch (amount) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    case 'thanks for everything':
      response = 'Bye.'
      break;
  }
  return response
}
