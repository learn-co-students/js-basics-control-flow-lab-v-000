// Write your code in this file!
function scuberGreetingForFeet(feet) {
  let greeting;
  if (feet <=400 ) {
    greeting = 'This one is on me!';
  } else if (feet < 2500) {
    greeting = 'I will gladly take your thirty bucks.';
  } else {
    greeting = 'No can do.';
  }
  return greeting;
}

function ternaryCheckCity(city) {
  const able = city === 'NYC' ? "Ok, sounds good." : "No go.";
  return able;
}

function switchOnCharmFromTip(tip) {
  let message;

  switch (tip) {
    case 'generous':
      message = 'Thank you so much.';
      break;
    case 'not as generous':
      message = 'Thank you.';
      break;
    default:
      message = 'Bye.';
      break;
  }

  return message;
}