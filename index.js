// Write your code in this file!
function scuberGreetingForFeet(distance) {
  if (distance <= 400) return 'This one is on me!'
  if (distance > 2500) return 'No can do.'
  return 'I will gladly take your thirty bucks.'
}

function ternaryCheckCity(city) {
  return city == 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip) {
  if (tip == 'generous') return 'Thank you so much.'
  if (tip == 'not as generous') return 'Thank you.'
  return 'Bye.'
}
