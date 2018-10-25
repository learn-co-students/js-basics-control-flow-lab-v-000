// Write your code in this file!

function scuberGreetingForFeet(someValue) {
  let greeting;

  if (someValue > 2500) {
    greeting = 'No can do.';
  } else if (someValue >= 2000) {
    greeting = 'I will gladly take your thirty bucks.';
  } else if (someValue <= 400) {greeting = 'This one is on me!';
  }

  return greeting;
  }

function ternaryCheckCity(city) {
  let greeting;

  if (city === 'NYC') {
    greeting = 'Ok, sounds good.'
  }
  else {greeting = "No go."}

  return greeting;
}

function switchOnCharmFromTip(tip){
  let greeting

  switch(tip) {
    case 'not as generous':
    greeting = "Thank you.";
    break;
    case 'generous':
    greeting = "Thank you so much.";
    break;
    default:
    greeting = "Bye."
  }

  return greeting

}
