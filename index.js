// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let charge;
  if (someValue <= 400) {
    charge = "This one is on me!";
  } else if (someValue > 2000 && someValue < 2500) {
    charge = "I will gladly take your thirty bucks.";
  } else if (someValue > 2500) {
    charge = "No can do.";
  }
  return charge
}

function ternaryCheckCity(city) {
  let go;

  city === 'NYC' ? go = 'Ok, sounds good.' : go = 'No go.';

  return go;
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
      response = "Bye.";
  }
  return response;
}
