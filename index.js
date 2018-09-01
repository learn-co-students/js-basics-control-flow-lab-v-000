// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let ride;
  if (distance <= 400) {
    ride = 'This one is on me!';
  } else if (distance > 2500) {
    ride = 'No can do.';
  } else {
    ride = 'I will gladly take your thirty bucks.';
  }
  return ride
}

function ternaryCheckCity(destination) {
  return destination === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}


function switchOnCharmFromTip(tip) {
  let response;
  if (tip === 'generous') {
    response = 'Thank you so much.';
  } else if (tip === 'not as generous') {
    response = 'Thank you.';
  } else {
    response = 'Bye.';
  }
  return response
}
