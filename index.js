// Write your code in this file!
function scuberGreetingForFeet(ride) {
  let response;
  if (ride <= 400) {
    response = 'This one is on me!'
  } else if (ride > 2000 && ride <= 2500) {
    response = 'I will gladly take your thirty bucks.'
  } else if (ride > 2500) {
    response = 'No can do.'
  }
  return response;
}

function ternaryCheckCity(city) {
  let response;
  if (city === 'NYC') {
    response = 'Ok, sounds good.'
  } else {
    response = 'No go.'
  }
  return response;
}

function switchOnCharmFromTip(tip) {
  let response;
  if (tip === 'generous') {
    response = 'Thank you so much.'
  } else if (tip === 'not as generous') {
    response = 'Thank you.'
  } else {
    response = 'Bye.'
  }
  return response;
}
