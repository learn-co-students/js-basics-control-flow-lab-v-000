// Write your code in this file!
function scuberGreetingForFeet(ride) {
  switch(true) {
    case ride <= 400:
      return("This one is on me!");
      break;
    case ride > 2000 && ride < 2501:
      return('I will gladly take your thirty bucks.');
      break;
    case ride > 2500:
      return('No can do.');
      break;
  }
}

function ternaryCheckCity(city) {
    return city === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  if (tip === 'generous') {
    return "Thank you so much.";
  } else if (tip === 'not as generous') {
    return "Thank you.";
  } else {
    return "Bye.";
  }
}
