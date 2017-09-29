// Write your code in this file!
function scuberGreetingForFeet(feet) {
 if (feet <= 2000) {
    return "This one is on me!"
  } else if (feet > 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (feet > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city) {
 return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip) {
  let response
  switch (tip) {
    case 'generous' :
   return response = 'Thank you so much.'
    break
    case 'not as generous' :
    return response = 'Thank you.'
    break
    default:
    return response = 'Bye.'
    break
  }
}