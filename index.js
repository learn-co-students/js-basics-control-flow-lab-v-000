// Write your code in this file!
function scuberGreetingForFeet(ride) {
  if(ride <= 400){
    return 'This one is on me!'
  } else if(ride > 2000 && ride <= 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if(ride > 2500){
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  if(city === 'NYC'){
    return 'Ok, sounds good.'
  } else if(city === 'Pittsburgh') {
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip){
  let text = ""
  switch(tip) {
      case "generous":
          text = 'Thank you so much.';
          break;
      case "not as generous":
          text = 'Thank you.';
          break;
      default:
          text = 'Bye.';
  }
  return text
}
