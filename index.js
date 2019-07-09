function scuberGreetingForFeet(feetValue) {
  let result

  // switch (feetValue) {
  //   case feetValue <= 400:
  //     result = 'This one is on me!';
  //     break;
  //   case feetValue > 2000 && feetValue <= 2500:
  //     result = 'I will gladly take your thirty bucks.';
  //     break;
  //   case feetValue > 2500:
  //     result = 'No can do.';
  // }
  if (feetValue <= 400) {
    result = 'This one is on me!';
  } else if (feetValue > 2000 && feetValue <= 2500) {
    result = 'I will gladly take your thirty bucks.';
  } else if (feetValue > 2500) {
    result = 'No can do.';
  }
  return result
}

function ternaryCheckCity(cityValue) {
  let result = cityValue === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return result
}

function switchOnCharmFromTip(tipValue) {
  let result
    switch (tipValue) {
      case 'generous':
        result = 'Thank you so much.';
        break;
      case 'not as generous':
        result = 'Thank you.';
        break;
      default:
        result = 'Bye.';

    }
    return result 
}
