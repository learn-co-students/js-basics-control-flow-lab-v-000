function scuberGreetingForFeet(someNumber) {
  let result
  if (someNumber <= 400) {
    result = "This one is on me!"
  }
  else if (someNumber > 2000 && someNumber < 2500){
    result = 'I will gladly take your thirty bucks.'
  }
  else if (someNumber > 2500){
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(city){
  let result = (city === "NYC") ? 'Ok, sounds good.' : 'No go.'
  return result
}

function switchOnCharmFromTip(tip){

  switch(tip){
    case 'generous':
      return "Thank you so much.";
    break;

    case 'not as generous':
      return 'Thank you.';
    break;

    default:
      return 'Bye.';
    break;
  }

}
