function scuberGreetingForFeet(distance){
  if(distance > 2500) {
    return "No can do.";
  } else if(distance > 2000) {
    return "I will gladly take your thirty bucks.";
  } else {
    if(distance <= 400) {
      return "This one is on me!"
    }
  }
}

function ternaryCheckCity(destination){
  let response;
  destination === "NYC" ? response = "Ok, sounds good." : response = "No go.";
  return response
}

function switchOnCharmFromTip(tip_amount){
  switch(tip_amount){
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye."
    }
}
