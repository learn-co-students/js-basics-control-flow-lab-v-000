// Write your code in this file!
function scuberGreetingForFeet(ride) {
  let result
  if (ride <= 400) {
    result = 'This one is on me!'
  } else if (ride > 2000 && ride < 2500) {
    result = 'I will gladly take your thirty bucks.'
  } else if (ride > 2500) {
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(city) {
  let goToCity
  city == 'NYC' ? goToCity = 'Ok, sounds good.' : goToCity = 'No go.'
  return goToCity
}

function switchOnCharmFromTip(tip) {
  let response
  if (tip == 'generous') {
    response = 'Thank you so much.'
  } else if (tip == 'not as generous') {
    response = 'Thank you.'
  } else {
    response = 'Bye.'
  }
  return response
}
