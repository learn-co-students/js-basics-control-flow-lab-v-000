function scuberGreetingForFeet(someNumber) {

  let result
  if (someNumber <= 400) {
    result = 'This one is on me!';
  }
  else if (someNumber > 2500) {
    result = 'No can do.';
  }
  else {
    result = 'I will gladly take your thirty bucks.';
  }

  return result
}

function ternaryCheckCity(someCity) {
  result = someCity === 'NYC' ? 'Ok, sounds good.' : 'No go.';

  return result
}

function switchOnCharmFromTip(someTip) {
  switch (someTip){
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
  return result
}
