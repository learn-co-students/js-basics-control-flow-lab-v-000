function scuberGreetingForFeet(feet){
  // Write your code here!
let result;

  if (feet < 400) {
    return result = "This one is on me!";
  } else if (feet > 2000 && feet < 2499) {
    return result = "I will gladly take your thirty bucks." ;
  } else if  (feet > 2500) {
    return result = "No can do.";
  } else {
    return result = "";
  }
}

function ternaryCheckCity(city){
  // Write your code here!

    return (city === "NYC" ? "Ok, sounds good." : "No go.");
}

function switchOnCharmFromTip(tip){
  // Write your code here!

  let result;

  switch (tip) {
    case "generous":
     result = "Thank you so much.";
     break;
    case "not as generous":
      result = "Thank you.";
      break;
    default:
      result = "Bye.";
}
    return result
}