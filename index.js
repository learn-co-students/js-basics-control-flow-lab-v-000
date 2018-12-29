function scuberGreetingForFeet(someValue) {
  let greeting;

  if (someValue <= 400) {
    greeting = "This one is on me!";
  }

  if (someValue > 2000) {
    greeting = "I will gladly take your thirty bucks.";
  }

  if (someValue > 2500) {
    greeting = "No can do.";
  }

  return greeting;
}


function ternaryCheckCity(city) {

  return (city === 'NYC' ? "Ok, sounds good." : "No go.");

}


function switchOnCharmFromTip(tip) {
  let response;

  switch (tip) {
    case 'generous':
      response = "Thank you so much.";
      break;
    case 'not as generous':
      response = "Thank you.";
      break;
    default:
      response = "Bye.";
      break;
    }

  return response;
}
