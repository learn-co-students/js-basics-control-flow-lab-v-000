// Write your code in this file!
let message = '';
let trip = '';

function scuberGreetingForFeet(trip, message){
  if (trip <= 400) {
    message = 'This one is on me!'
    return message;
  }else if (trip > 2000 && trip < 2500) {
    message = 'I will gladly take your thirty bucks.'
    return message;
  }else if (trip > 2500) {
     message = 'No can do.'
     return message;
   }
}

let city = '';
function ternaryCheckCity(city, message) {
  city === 'NYC' ? message = 'Ok, sounds good.' : message = 'No go.';
  return message;
}

let tip = ''
function switchOnCharmFromTip(tip, message) {
  if (tip === 'generous'){
     message = 'Thank you so much.'
     return message;
   }else if (tip === 'not as generous') {
     message = "Thank you."
     return message;
   }else if (tip != 'generous' || tip != 'not as generous'){
     message = "Bye."
     return message;
   }
}
