function scuberGreetingForFeet(feet) {
  let result;
  if (feet <= 400) {
    result = "This one is on me!";
  } else if (feet > 2500) {
    result = "No can do.";
  } else {
    result = "I will gladly take your thirty bucks.";
  }
  return result;
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip) {
  let response;

  switch (tip) {
    case "generous":
      response = "Thank you so much.";
      break;
    case "not as generous":
      response = "Thank you."
      break;
    default:
    response = "Bye.";
  }
  return response;
}
