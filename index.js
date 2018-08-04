// Write your code in this file!


function scuberGreetingForFeet(someNumber){
  let message;
  if (someNumber < 400){
    message = 'This one is on me!';
  } else if (someNumber > 2500) {
    message = 'No can do.'
  } else if (someNumber > 2000) {
    message = 'I will gladly take your thirty bucks.';
  }
  return message;
}

function ternaryCheckCity(location){
  let reply;
  reply = location === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return reply;
}

function switchOnCharmFromTip(tip) {
  let message;
  switch (tip){
    case 'generous':
      message = 'Thank you so much.'
      break;
    case 'not as generous':
      message = 'Thank you.'
      break;
    case 'thanks for everything':
      message = 'Bye.'
      break;
  }
  return message;

}
