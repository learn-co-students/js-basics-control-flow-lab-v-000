function scuberGreetingForFeet(distance) {
  let response;
  if (distance <= 400) {
   response = "This one is on me!"

  } else if (distance > 2500) {
    response = "No can do."
  } else {
    response =  "I will gladly take your thirty bucks."
  }
   return response
}

function ternaryCheckCity(city) {
  let response;
  return response = (city === 'NYC') ? 'Ok, sounds good.' : 'No go.'
 
}

function switchOnCharmFromTip(tip) {
   let gratitude;
  switch (tip) {
    case 'generous':
      gratitude = 'Thank you so much.';
      break;
    case 'not as generous':
      gratitude = "Thank you.";
      break;
    default:
      gratitude = 'Bye'
  }
  return gratitude;
}
