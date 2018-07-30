// Write your code in this file!
function scuberGreetingForFeet(input) {
  let result;
    if (input <= 400){
      result = "This one is on me!";
    } else if ( input >= 2000 && input < 2500) {
      result = "I will gladly take your thirty bucks."
    }
    else {
      result = 'No can do.'
    }
    return result;
}

function ternaryCheckCity(input) {
  return (input === 'NYC')? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
  case "generous":
    return "Thank you so much."
    break;
  case "not as generous":
    return "Thank you."
    break;
  default:
    return "Bye."
  }
}
