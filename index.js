// Write your code in this file!
function scuberGreetingForFeet(feet){
  let result;
  if (feet < 400){
    result = 'This one is on me!';
  } else if (feet > 2500) {
    result = 'No can do.';
  } else if ( feet > 2000) {
    result = 'I will gladly take your thirty bucks.';
  }
  return result;
}

function ternaryCheckCity(city){
  let result = city === 'NYC'? 'Ok, sounds good.':'No go.';
  return result;
}

function switchOnCharmFromTip(charm) {
  let response;
  switch(charm){
    case 'generous':
      response = 'Thank you so much.'
      break;
    case 'not as generous':
      response = 'Thank you.'
      break;
    case 'thanks for everything':
      response = 'Bye.'
      break;
  }
  return response;
}
