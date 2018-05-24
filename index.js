// Write your code in this file!

function scuberGreetingForFeet(distance) {
  let greeting;
  if (distance < 400) {
    greeting = "This one is on me!";
  }
  else if (distance > 2000 && distance < 2500) {
    greeting = "I will gladly take your thirty bucks."
  }
  else {
    greeting = "No can do."
  }
  return greeting
}

function ternaryCheckCity(city) {
  let message;
  (city === "NYC") ? message = "Ok, sounds good." : message = "No go." ;
  return message;
}

function switchOnCharmFromTip(tip) {
  let message;
  switch (tip) {
    case 'generous':
    message = "Thank you so much.";
    break;
    case 'not as generous':
    message = "Thank you.";
    break;
    case 'thanks for everything':
    message = "Bye.";
    break;
  }
  return message;
}