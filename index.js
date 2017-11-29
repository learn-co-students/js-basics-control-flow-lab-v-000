// Write your code in this file!

let msg;

function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    msg = 'This one is on me!'
  } else if (feet > 2500) {
    msg = 'No can do.'
  } else if (feet > 2000) {
    msg = 'I will gladly take your thirty bucks.'
  }
  return msg;
}

let citymsg;

function ternaryCheckCity(city) {
  city === 'NYC' ? citymsg = 'Ok, sounds good.' : citymsg = 'No go.';
  return citymsg
}

let tip_msg;

function switchOnCharmFromTip(tip) {

  switch(tip) {
    case 'generous':
      tip_msg = 'Thank you so much.';
      break;
    case 'not as generous':
      tip_msg = 'Thank you.';
        break;
    default:
      tip_msg = 'Bye.';
  }
return tip_msg
}

