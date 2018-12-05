// Write your code in this file!
function scuberGreetingForFeet(num) {
 let result
 if (num <= 400) {
   result = 'This one is on me!'
 } else if (num > 2500) {
   result = 'No can do.'
 } else if (num > 2000) {
   result = 'I will gladly take your thirty bucks.'
 }
 return result
}

function ternaryCheckCity(city) {
  let message
  city === 'NYC' ? (message = 'Ok, sounds good.') : (message = "No go.");
  return message;
}

function switchOnCharmFromTip(message) {
  let response
  switch (message) {
      case 'generous':
          response = 'Thank you so much.';
          break;
      case 'not as generous':
          response = 'Thank you.';
          break;
      case 'thanks for everything':
          response = 'Bye.';
          break;
  }
  return response
}
