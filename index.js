// Write your code in this file!

let greeting, ride;

function scuberGreetingForFeet(ride) {
  if (ride <= 400) {
    greeting = 'This one is on me!';
  } else if (ride > 2000 && ride < 2500){
    greeting = 'I will gladly take your thirty bucks.';
  } else if (ride > 2500) {
    greeting = 'No can do.';
  }
  return greeting;
}

function ternaryCheckCity(city){
  let result;
  city === 'NYC' ? result = 'Ok, sounds good.' : result = "No go.";

  return result;
}

function switchOnCharmFromTip(tip) {
  let response;

  switch(tip) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
  }
  return response
}
