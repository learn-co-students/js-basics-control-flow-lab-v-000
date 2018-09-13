// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let response;
  if (someValue <= 400) {
  response = 'This one is on me!'
} else if (someValue > 2000 && someValue <= 2500) {
  response =  'I will gladly take your thirty bucks.'
} else if (someValue > 2500) {
  response =  'No can do.'
}
  return response
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? "Ok, sounds good.":"No go."
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
    return 'Thank you so much.';
    case 'not as generous':
    return 'Thank you.';
    case 'thanks for everything':
    return "Bye."; 
  }
}
