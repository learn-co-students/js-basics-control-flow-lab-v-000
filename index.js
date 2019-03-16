function scuberGreetingForFeet(dist) {
  let result;

  if (dist <= 400) {
    result = 'This one is on me!';
  } else if (dist > 2000 && dist < 2500) {
    result = 'I will gladly take your thirty bucks.';
  } else if (dist > 2500) {
    result = 'No can do.';
  }

  return result;
}

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
