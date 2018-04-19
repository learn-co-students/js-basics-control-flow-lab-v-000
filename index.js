// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let response;

  if (someValue <= 400) {
    response = 'This one is on me!';
  } else if (someValue > 2000 && someValue < 2500) {
    response = 'I will gladly take your thirty bucks.';
  } else if (someValue > 2500) {
    response = 'No can do.';
  }
  return response;
}

function ternaryCheckCity(someValue){
  let response = (someValue === 'NYC') ? 'Ok, sounds good.' : 'No go.';

  return response;
}

function switchOnCharmFromTip(someValue) {
  let response;

  switch (someValue) {
    case "generous" :
      response = 'Thank you so much.';
      break;
    case "not as generous" :
      response = 'Thank you.';
      break;
    default :
      response = 'Bye.';
  }

  return response;
}
