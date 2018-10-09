// Write your code in this file!
function scuberGreetingForFeet(distance) {

  let response

  if (distance <= 400) {
    response = 'This one is on me!'
  }

  if (distance > 2000) {
  response = 'I will gladly take your thirty bucks.'
  }

  if  (distance > 2500) {
  response = 'No can do.'
  }
  return response
}

function ternaryCheckCity(city) {

  let reply

  if (city != 'NYC') {
    reply = 'No go.'
  }

  else if (city === 'NYC') {
    reply = 'Ok, sounds good.'
  }

  return reply
}

function switchOnCharmFromTip(tip){

  let phrase

  if (tip === 'generous') {
    phrase = 'Thank you so much.'
  }

  else if (tip === 'not as generous') {
    phrase = 'Thank you.'
  }

  else {
    phrase = 'Bye.'
  }
  return phrase
}
