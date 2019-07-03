// Write your code in this file!

function scuberGreetingForFeet(num){
  let message;
    if (num <= 400) {
      message = 'This one is on me!';
    } else if (num >= 401 && num <= 2500){
      message = 'I will gladly take your thirty bucks.';
    } else {
      message = 'No can do.'
    }
  return message
}

function ternaryCheckCity(city){
  let message;
    if (city === 'NYC') {
      message = "Ok, sounds good."
    } else {
      message = "No go."
    }
  return message
}

function switchOnCharmFromTip(tip){
  let message;
    switch (tip) {
      case "generous":
        message = "Thank you so much.";
        break;
      case "not as generous":
        message = "Thank you.";
        break;
      default:
        message = "Bye."
    }
  return message
}
