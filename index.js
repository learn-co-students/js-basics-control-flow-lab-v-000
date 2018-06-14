// Write your code in this file!
function scuberGreetingForFeet(someValue) {

  if (someValue < 400) {
    return 'This one is on me!';
}

  else if (someValue >= 400 && someValue < 2500) {
    return 'I will gladly take your thirty bucks.'
  }

  else if (someValue > 2500) {
    return 'No can do.'
  }
}


function ternaryCheckCity(someCity) {
  let response
  response = someCity === 'NYC' ? 'Ok, sounds good.' : 'No go.'
  return response
}



function switchOnCharmFromTip(someTip) {
  if (someTip === 'generous') {
    return 'Thank you so much.';
  }

  else if (someTip === 'not as generous') {
    return 'Thank you.';
  }

  else {
    return 'Bye.';
  }
}
