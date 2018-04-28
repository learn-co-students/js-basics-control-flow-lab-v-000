function scuberGreetingForFeet(ride) {
  let comment;
  if (ride <= 400) {
    comment = 'This one is on me!';
  }
  else if (ride > 2000 && ride < 2500) {
    comment = 'I will gladly take your thirty bucks.'
  }
  else if (ride > 2500) {
    comment = 'No can do.'
  }
  return comment;
}

function ternaryCheckCity(city) {
  let response;
  if (city === 'NYC') {
    response = "Ok, sounds good."
  } else {
    response = "No go."
  }
  return response;
}

function switchOnCharmFromTip(tip) {
  let response
  switch (tip) {
    case 'generous':
      response = "Thank you so much."
      break;
    case 'not as generous':
      response = 'Thank you.'
    break;
    default:
      response = "Bye."
    break;
  }
  return response
}
