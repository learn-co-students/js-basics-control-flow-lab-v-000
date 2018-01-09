// Write your code in this file!
function scuberGreetingForFeet(free_ride) {
   if (free_ride <= 400) {
     return 'This one is on me!';
   }
   else if ((free_ride > 400) && (free_ride < 2500)) {
     return 'I will gladly take your thirty bucks.';
   }
   else {
     return 'No can do.';
   }
 }


function ternaryCheckCity(city) {
  return city==="NYC" ? "Ok, sounds good." : "No go.";
}



function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
      break;
  }
}
