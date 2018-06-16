function scuberGreetingForFeet(rideLength) {
  let cost
  if (rideLength <= 400) {
    cost = "This one is on me!";
  } else if (rideLength > 2000 && rideLength <= 2500) {
  cost = "I will gladly take your thirty bucks."
  } else if (rideLength > 2500) {
  cost = "No can do."
  }
  return cost
}

function ternaryCheckCity(city) {
  city === "NYC" ? message = "Ok, sounds good." : message = "No go."
  return message
}

function switchOnCharmFromTip(tip) {
  let message;
  switch(tip) {
    case 'generous':
      message = 'Thank you so much.'
      break;
    case 'not as generous':
      message = "Thank you."
      break;
    case 'thanks for everything':
      message = 'Bye.'
      break;
  }
  return message;
}
