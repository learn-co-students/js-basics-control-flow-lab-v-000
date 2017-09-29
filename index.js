// Write your code in this file!

const scuberGreetingForFeet = (feet) => {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet > 1999 && feet < 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  return 'No can do.';
};

const ternaryCheckCity = city =>
  (city === 'NYC' ? 'Ok, sounds good.' : 'No go.');

const switchOnCharmFromTip = (tip) => {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
};
