// Write your code in this file!
function scuberGreetingForFeet(arg){
  if (arg <= 400){
    return 'This one is on me!';
  } else if (arg > 2500){
      return 'No can do.';
  } else if (arg > 2000) {
      return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(arg){
  var response = (arg === "NYC") ? "Ok, sounds good." : "No go.";
  return response;
}

function switchOnCharmFromTip(arg){
  switch (arg) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    default:
    return 'Bye.'

  }
}
