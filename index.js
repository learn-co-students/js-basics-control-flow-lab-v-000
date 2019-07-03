// Write your code in this file!
function scuberGreetingForFeet(length){
  let result;
  if(length<=400){
     result="This one is on me!";
  } else if(length>2500){
    result="No can do.";
  } else {
    result="I will gladly take your thirty bucks.";
  } 
  return result;
}

function ternaryCheckCity(city){
  return (city==="NYC" ? "Ok, sounds good." : "No go.");
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case "generous":
      res="Thank you so much.";
      break;
    case "not as generous":
      res="Thank you.";
      break;
    default:
      res="Bye.";
  }
  return res;
}