// Write your code in this file!

function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return 'This one is on me!';
  } else if (someValue > 2500) {
    return 'No can do.';
  } else if (someValue > 2000) {
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(cityName) {
  let response
  return cityName === 'NYC' ? (response = 'Ok, sounds good.') : (response = 'No go.');
}

function switchOnCharmFromTip(tipValue) {
  switch (tipValue) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
