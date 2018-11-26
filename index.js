// Write your code in this file!
function scuberGreetingForFeet(length){
  let fee;
  switch (true) {
    case length <= 400:
      fee = 'This one is on me!';
      break;
    case length > 2500:
      fee = 'No can do.';
      break;
    default:
      fee = 'I will gladly take your thirty bucks.';
      break;
  }
  return fee;
}

function ternaryCheckCity(city) {
  let greeting = city == 'NYC' ? 'Ok, sounds good.' : 'No go.'
  return greeting;
}

function switchOnCharmFromTip(tip) {
  let greeting;
  switch (tip) {
    case 'generous':
      greeting = 'Thank you so much.'
      break;
    case 'not as generous':
      greeting = 'Thank you.'
      break;
    default:
    greeting = 'Bye.'
    break;
  }
  return greeting;
}
