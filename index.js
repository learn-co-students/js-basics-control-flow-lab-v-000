// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let greeting
  if (someValue <= 400) {
    greeting = 'This one is on me!'
  }
  else if (someValue > 2000 && someValue < 2501) {
    greeting = 'I will gladly take your thirty bucks.'
  }
  else  {
    greeting = 'No can do.'
  }
  return greeting
}

function  ternaryCheckCity(city) {
  let answer
  (city === 'NYC' ? answer = 'Ok, sounds good.' : answer = 'No go.');
  return answer
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
    default:
        response = 'Bye.';
        break;
  }
  return response;
}
