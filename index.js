// Write your code in this file!
function scuberGreetingForFeet(someNumber) {
  let message
  if (someNumber <= 400) {
    message = 'This one is on me!';
  }
    if (someNumber > 2000 ) {
      message = 'I will gladly take your thirty bucks.';
  }
    if (someNumber > 2500) {
      message = 'No can do.';
    }
  return message
}


function ternaryCheckCity(someCity) {
  let message;

  if (someCity == 'NYC') {
    message = 'Ok, sounds good.';
  }
    if (someCity !== 'NYC') {
     message = 'No go.';
  }

  return message
}

function switchOnCharmFromTip(someTip) {
  let message;

  if (someTip == 'generous') {
    message = 'Thank you so much.';
  }
    if (someTip == 'not as generous') {
      message = 'Thank you.';
    }
      if (someTip == 'thanks for everything') {
        message = 'Bye.';
      }

  return message
}
