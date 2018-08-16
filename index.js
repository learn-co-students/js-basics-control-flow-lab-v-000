// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let result
  if (someValue <= 400) {
    result = 'This one is on me!'
  } else if (someValue > 2500) {
    result = 'No can do.'
  } else if (someValue >= 2000) {
    result = 'I will gladly take your thirty bucks.'
  }
  return result
}

function ternaryCheckCity(city) {
  // let result
  // city === 'NYC' ? result = 'Ok, sounds good.' : result = "No go."
  // return result
  return (city === 'NYC' ? 'Ok, sounds good.' : "No go.")
}

function switchOnCharmFromTip(tip) {
  let result
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
     return 'Bye.'
  }
}
