function scuberGreetingForFeet(someValue) {
  if (someValue > 2500) {
     return 'No can do.';
  }
    else if (someValue > 2000) {
      return 'I will gladly take your thirty bucks.';
  }
      else if (someValue <= 400) {
        return 'This one is on me!';
  }
}

function ternaryCheckCity(city) {
  return (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tipLevel) {
  switch (tipLevel) {
      case 'generous':
        return 'Thank you so much.'
          break;
      case 'not as generous':
        return 'Thank you.'
          break;
      default:
        return 'Bye.'
          break;
  }
}
