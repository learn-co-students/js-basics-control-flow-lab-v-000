function scuberGreetingForFeet(feet){
  if(feet <= 400){
    return 'This one is on me!';
  } else if(feet > 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if(feet > 2500){
    return 'No can do.';
  }
}


function ternaryCheckCity(city) {
  let ternaryCheckCity;
  city === 'NYC' ? ternaryCheckCity = 'Ok, sounds good.' : ternaryCheckCity = 'No go.'
  return ternaryCheckCity
}

function switchOnCharmFromTip(tip) {
  let switchOnCharmFromTip;
  switch (tip) {
  case 'generous':
    switchOnCharmFromTip = "Thank you so much.";
    break;
  case 'not as generous':
    switchOnCharmFromTip = "Thank you.";
    break;
  default:
    switchOnCharmFromTip = "Bye.";
    break;
  }
  return switchOnCharmFromTip
}
