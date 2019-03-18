function scuberGreetingForFeet(someValue) {
  let response;
  if (someValue <= 400) {
    response = 'This one is on me!';
  } else if (someValue > 2500) {
    response = 'No can do.';
  } else if (someValue > 2000) {
    response = 'I will gladly take your thirty bucks.';
  }
  return response;
};

function ternaryCheckCity(someCity) {
  let response;
  someCity === 'NYC' ? response = 'Ok, sounds good.' : response = 'No go.';
  return response
};

function switchOnCharmFromTip(someTip) {
  let response;
  switch(someTip) {
    case 'generous':
    response = "Thank you so much."
    break;

    case 'not as generous':
    response = "Thank you."
    break;

    default:
    response = "Bye."
    break;
  }
  return response
};
