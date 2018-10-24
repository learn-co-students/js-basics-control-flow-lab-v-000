

function scuberGreetingForFeet(aValue) {
  if (aValue <= 400) {
    return 'This one is on me!'
  }else if (aValue > 2500) {
    return 'No can do.'
  }else if (aValue > 2000) {
    return 'I will gladly take your thirty bucks.'
  }
}

function ternaryCheckCity(city) {
  return city === "NYC" ? 'Ok, sounds good.' : 'No go.'
}

 function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
      reak;
    case 'not as generous':
      return "Thank you.";
      break;
    default:
      return "Bye.";
      break;
  }
}
