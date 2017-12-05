// Use if and else if statements to return the correct greeting based on the distance the passenger desires to travel.
function scuberGreetingForFeet(distance) {
  let welcomeMessage;
  if (distance <= 400) {
    welcomeMessage = 'This one is on me!';
  } else if (distance > 2000 && distance < 2500) {
    welcomeMessage = 'I will gladly take your thirty bucks.';
  } else {
    welcomeMessage = 'No can do.';
  }
  return welcomeMessage;
}

// Use a ternary operator to return the correct response based on the desired destination of the passenger.
function ternaryCheckCity(destination) {
  let responeMessage;
  destination === 'NYC' ? responeMessage = 'Ok, sounds good.' : responeMessage = 'No go.'
  return responeMessage;
}

// Use a switch statement to return a different response based on the generosity of the passenger's tip.
function switchOnCharmFromTip(tip) {
  let thankyouMessage;

  switch (tip) {
    case 'generous':
      thankyouMessage = 'Thank you so much.';
      break;
    case 'not as generous':
      thankyouMessage = 'Thank you.';
      break;
    default:
      thankyouMessage = 'Bye.';
      break;
  }
  return thankyouMessage
}
