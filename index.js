// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let message;
  if (someValue <= 400) {
    message = `This one is on me!`;
    } else if (someValue > 2000 && someValue <= 2500) {
      message = `I will gladly take your thirty bucks.`;
    } else if (someValue > 2500) {
      message = `No can do.`;
    }
  return message;
}


function ternaryCheckCity(someValue) {
  let message;
  someValue === `NYC` ?  message = `Ok, sounds good.` : message = `No go.`
  return message;
}

function switchOnCharmFromTip(tipAmount) {
  let response;
  switch (tipAmount) {
    case `generous` :
    response = `Thank you so much.`;
    break;
    case `not as generous` :
    response = `Thank you.`;
    break;
    case `thanks for everything` :
    response = `Bye.`;
    break;
  }
  return response;
}
