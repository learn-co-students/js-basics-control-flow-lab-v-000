// Write your code in this file!
function scuberGreetingForFeet(someNumber) {
  let greeting;
  if (someNumber <= 400) {
    greeting = "This one is on me!";
  } else if (someNumber > 2000 && someNumber < 2501) {
    greeting = "I will gladly take your thirty bucks.";
  } else {
    greeting = "No can do.";
  }
  return greeting;
} 

function ternaryCheckCity(cityName) {
  let response = cityName === "NYC" ? "Ok, sounds good." : "No go.";
  return response;
}

function switchOnCharmFromTip(amount) {
  let reply
  switch (amount) {
    case "generous":
      reply = "Thank you so much."
      break;
    case "not as generous":
      reply = "Thank you."
      break;
    default:
      reply = "Bye."
      break;
  }
  return reply
}