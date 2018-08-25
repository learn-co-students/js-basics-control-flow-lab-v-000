function scuberGreetingForFeet(distance) {
  let result;
  
  if (distance >= 0 && distance <= 400 ) {
    result = 'This one is on me!';
  }
  else if (distance > 2000 && distance <= 2500) {
    result = 'I will gladly take your thirty bucks.'
  }
  else if (distance > 2500) {
    result = "No can do."
  }
  
  return result
}

function ternaryCheckCity(destination) {
  let result;

  if (destination == 'NYC') {
    result = 'Ok, sounds good.'
  }
  else {
    result = 'No go.'
  }
  
  return result
}

function switchOnCharmFromTip(amount) {
  let result;

  if (amount == 'generous') {
    result = 'Thank you so much.'
  }
  else if (amount == 'not as generous' ) {
    result = 'Thank you.'
  }
  else {
    result = 'Bye.'
  }
  return result
}




