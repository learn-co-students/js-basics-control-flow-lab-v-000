// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let result
  if (someValue <= 400) {
    result = "This one is on me!";
  } else if (someValue > 2000 && someValue <= 2500) {
    result = "I will gladly take your thirty bucks."
  } else {
    result = "No can do."
  }
  return result;
}

function ternaryCheckCity(name) {
  return name === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip) {
  let reply
  switch(tip) {
    case 'generous':
      reply = 'Thank you so much.';
      break;

    case 'not as generous':
      reply = 'Thank you.';
      break;

    default:
      reply = 'Bye.';
  }
  return reply;
}
