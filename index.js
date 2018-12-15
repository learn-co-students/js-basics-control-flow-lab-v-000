let rideDistance;

function scuberGreetingForFeet(rideDistance) {
  let result
  if (rideDistance <= 400) {
    result = 'This one is on me!';
  }
  else if (2000 < rideDistance && rideDistance < 2500) {
    result = 'I will gladly take your thirty bucks.';
  }
  else {
    result = 'No can do.';
  }

  return result
}

let destination;

function ternaryCheckCity(destination) {
  return destination === "NYC" ? 'Ok, sounds good.' : 'No go.';
}

let tip;

function switchOnCharmFromTip(tip) {
  let result

  switch(tip){
    case 'generous':
      result = 'Thank you so much.';
      break;
    case 'not as generous':
      result = 'Thank you.';
      break;
    default:
      result = 'Bye.';
      break;
  }
  return result
}
