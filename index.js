// Write your code in this file!
function scuberGreetingForFeet(rideLength) {
  if (rideLength <= 400) {
    greeting = 'This one is on me!';
  } else if (rideLength > 2500){
    greeting = 'No can do.';
  } else if (rideLength > 2000) {
    greeting = 'I will gladly take your thirty bucks.';
  }
  return greeting;
}

function ternaryCheckCity(cityName) {
  return cityName === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(amount) {
  switch(amount){
    case 'generous':
      return "Thank you so much.";
    break;

    case 'not as generous':
      return "Thank you.";
    break;

    default:
      return "Bye.";
  }
}
