scuberGreetingForFeet = (distance) => {
  if (distance < 400) {
    return 'This one is on me!';
  } else if (distance > 2500) {
      return 'No can do.';
  } else if (distance > 2000) {
      return 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
      return 'No can do.';
  }
}

ternaryCheckCity = (destination) => {
  return destination === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

switchOnCharmFromTip = (tip) => {
  switch(tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
  }
}