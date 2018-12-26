function scuberGreetingForFeet(distance) {
  let message;
  if (distance <= 400) {
    message = "This one is on me!";
  } else if (distance > 2000 && distance <= 2500) {
    message = "I will gladly take your thirty bucks.";
  } else if (distance > 2500) {
    message = "No can do.";
  }
  return message;
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  let message;
  switch (tip) {
    case "generous":
      message = "Thank you so much.";
      break;
    case "not as generous":
      message = "Thank you.";
      break;
    case "thanks for everything":
      message = "Bye.";
      break;
    }
  return message;
}
