// Write your code in this file!
let message;
// let destination;
let tip;

function scuberGreetingForFeet(distance) {

    if(distance <= 400) {
      message = 'This one is on me!';
    } else if (distance >= 2000 && distance <= 2500) {
      message = 'I will gladly take your thirty bucks.';
    }
    else {
      message = 'No can do.';
    }
    return message
}


 function ternaryCheckCity(destination) {
   destination === "NYC" ? message = 'Ok, sounds good.' : message = "No go.";
 return message}

function switchOnCharmFromTip(tip){
  switch(tip){
  case "generous":
  message = "Thank you so much.";
  break;
  case "not as generous":
  message = "Thank you.";
  break
  default:
  message = "Bye."
  }
  return message
}
