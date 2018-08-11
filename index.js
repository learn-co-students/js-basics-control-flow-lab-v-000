// Write your code in this file!

function scuberGreetingForFeet(rideSize){
  if (rideSize <= 400) {
    return 'This one is on me!'
  }
  else if(rideSize > 2000 && rideSize < 2500){
    return 'I will gladly take your thirty bucks.'
  }
  else if (rideSize > 2500){
      return 'No can do.'
  }
}

function ternaryCheckCity(city){
  if (city === "NYC"){
    return 'Ok, sounds good.'
  }
  else {
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return "Thank you so much."
    break;
    case 'not as generous':
      return "Thank you."
    break;
    default:
    return "Bye."
    break;
  }
}
