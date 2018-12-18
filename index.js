// Write your code in this file!

function scuberGreetingForFeet(someValue) {
  let result
  if (someValue < 400) {
    result = 'This one is on me!';
  } else if (401 < someValue && someValue < 2499 ) {
    result = 'I will gladly take your thirty bucks.';
  } else {
    result = 'No can do.';
  }
  return result
}

function ternaryCheckCity(cityValue) {
  answer = cityValue === 'NYC' ? 'Ok, sounds good.' : 'No go.'
  return answer
}

function switchOnCharmFromTip(tip) {
  let goodbye;

  switch(tip) {
  case 'generous':
    goodbye = "Thank you so much."
    break;
  case 'not as generous':
    goodbye = "Thank you."
    break;
  default:
    goodbye = 'Bye.'
  };

  return goodbye;
};
