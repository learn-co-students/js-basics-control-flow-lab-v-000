function scuberGreetingForFeet(feet){
  // Write your code here!
  switch (true) {
    case feet < 400:
      return "This one is on me!";
    case feet > 2500:
      return "No can do.";
    case feet > 2000:
      return "I will gladly take your thirty bucks.";
  }
  
}

function ternaryCheckCity(city){
  // Write your code here!
  let rtn;
  city === "NYC" ? rtn = "Ok, sounds good." : rtn = "No go."
  return rtn
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}