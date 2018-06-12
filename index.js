// Write your code in this file!

function scuberGreetingForFeet (feet) {
  let greeting;
  if (feet <= 400) {
    greeting = "This one is on me!";
  } else if (feet > 2000) {
    greeting = "I will gladly take your thirty bucks.";
    if (feet >= 2500) {
      greeting = "No can do.";
    }
  }
  return greeting;
}

function ternaryCheckCity (city) {
  let message;
  city === 'NYC' ? message = "Ok, sounds good." : message = "No go."
  return message;
}

function switchOnCharmFromTip (tip) {
  let charm;
  switch (tip) {
    case 'generous':
      charm = 'Thank you so much.';
      break;
    case 'not as generous':
      charm = 'Thank you.';
      break;
    default:
      charm = 'Bye.';
  }
  return charm;
}
