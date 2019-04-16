// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let greeting;

  if (distance <= 400) {
    greeting = "This one is on me!";
  } else if (distance >= 2000 && distance <= 2500) {
    greeting = "I will gladly take your thirty bucks.";
  } else {
    greeting = "No can do.";
  }
  return greeting;
}

function ternaryCheckCity(city) {
  return (city === "NYC" ? "Ok, sounds good." : "No go.");
}

function switchOnCharmFromTip(tipAmount) {

  let response;

  switch (tipAmount) {
    case 'generous':
      response = "Thank you so much.";
      break;
    case 'not as generous':
      response = "Thank you.";
      break;
    default:
      response = "Bye.";
  }
  return response;
}
