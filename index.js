// Write your code in this file!
function scuberGreetingForFeet(ride){
  if(ride > 2500){
    return "No can do.";
  } else if(ride > 2000){
    return "I will gladly take your thirty bucks.";
  } else if(ride < 400) {
    return "This one is on me!";
  } else{
    return "I'll have to calculate how much it will cost";
  }
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    case "thanks for everything":
      return "Bye.";
      break;
  }
}
