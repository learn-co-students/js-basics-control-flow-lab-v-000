// Write your code in this file!

function scuberGreetingForFeet(feet) {
  let result
  if(feet <= 400) {
    result = "This one is on me!"
  }
  else if(feet > 2000 && feet < 2500) {
    result = "I will gladly take your thirty bucks."
  }
  else {
    result = "No can do."
  }

  return result
}

function ternaryCheckCity(city) {
  return(city === "NYC" ? "Ok, sounds good." : "No go.")
}

function switchOnCharmFromTip(tip) {
  let thanks;

  switch (tip) {
    case 'generous':
      thanks = "Thank you so much.";
      break;
    case 'not as generous':
      thanks = "Thank you.";
      break;
    default:
      thanks = "Bye."
      break;
    return thanks
  }
  return thanks
}
