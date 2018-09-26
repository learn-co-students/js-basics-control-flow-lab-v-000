// Write your code in this file!

function scuberGreetingForFeet (ride){

  let cost;
  if (ride > 2500) {
    cost = 'No can do.'
  } else if (ride > 2000) {
    cost = 'I will gladly take your thirty bucks.'
  } else if (ride <= 400) {
    cost = 'This one is on me!'
  }
  return cost
}


function ternaryCheckCity(city) {

  let check;

  city === 'NYC' ? check = 'Ok, sounds good.' : check = 'No go.'
  return check;
}


function switchOnCharmFromTip(tip) {

  let response;

  switch (tip) {
    case "generous":
      response = 'Thank you so much.';
      break;
    case  'not as generous':
      response = 'Thank you.';
      break;
    case 'thanks for everything':
      response = 'Bye.';
  }
  return response;
}
