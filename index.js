// Write your code in this file!
function scuberGreetingForFeet(feet) {
  let greeting;
  if (feet <= 400) {
    greeting = "This one is on me!";
  } else if (feet < 2500){
    greeting = "I will gladly take your thirty bucks.";
  } else if (feet > 2500){
    greeting = "No can do.";
  }
  return greeting;
};

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  let resp;
  switch (tip) {
    case "generous":
      resp = "Thank you so much.";
      break;
    case "not as generous":
      resp = "Thank you.";
      break;
    default:
      resp = "Bye.";
      break;
  };
  return resp
}
