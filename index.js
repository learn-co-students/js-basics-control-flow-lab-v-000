// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let msg;
  if (distance <= 400) {
    msg = 'This one is on me!';
  }
  else if (distance > 2500) {
    msg = 'No can do.';
  }
  else {
    msg = 'I will gladly take your thirty bucks.';
  }
  return msg;
}

function ternaryCheckCity(city) {
  let response = city === "NYC" ? 'Ok, sounds good.' : "No go."
  return response
}

function switchOnCharmFromTip(tip) {
  let response;
  switch (tip) {
    case "generous":
      response = 'Thank you so much.';
      break;
    case "not as generous":
      response = 'Thank you.'
      break;
    default:
      response = "Bye."
  }
  return response;
}
