// Write your code in this file!
function scuberGreetingForFeet(feet){
  let result
  if (feet <= 400){
    result = 'This one is on me!';
  } else if (2000 < feet && feet < 2500){
    result = 'I will gladly take your thirty bucks.';
  } else if (feet > 2500){
    result = 'No can do.';
  }
  return result
}
function ternaryCheckCity(city){
   return (city === "NYC" ? "Ok, sounds good." : "No go.");
  }
  
function switchOnCharmFromTip(tip) {
  let charm;
  switch (tip) {
    case "generous":
      charm = "Thank you so much.";
      break;
    case "not as generous":
      charm = "Thank you.";
      break;
    default:
      charm = "Bye.";
      break;
  }

  return charm;
}
