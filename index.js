// Write your code in this file!
function scuberGreetingForFeet(someNumber) {
  if (someNumber <= 400) {
    return 'This one is on me!';
  }
  
  else if (someNumber > 2000 && someNumber < 2500){ 
    return 'I will gladly take your thirty bucks.';
  }
  
  else if (someNumber > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(destination) {
  response = "";
  destination == "NYC" ? response = 'Ok, sounds good.' : response = 'No go.';
  return response;
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    
    case  "not as generous":
      return "Thank you.";

    default:
      return "Bye.";
  }
}