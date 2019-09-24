function scuberGreetingForFeet(requestedMiles){
  let result ;
  if (requestedMiles <= 400) {
    result = 'This one is on me!';
    return result;
  }
  else if (requestedMiles > 2000 && requestedMiles < 2500 ){
    result = 'I will gladly take your thirty bucks.';
    return result;
  }
  else
    result = 'No can do.' ;
    return result;
}

function ternaryCheckCity(_city){
  let result ;
  _city === "NYC" ? (result = "Ok, sounds good.") : (result = "No go.") ;
  return result;
}

function switchOnCharmFromTip(_tip){
  let result;
  switch(_tip){
    case 'generous':
      result = 'Thank you so much.';
      break;
    case 'not as generous':
      result = 'Thank you.';
      break;
    default:
      result = 'Bye.';
      break;
  }
  return result;
}