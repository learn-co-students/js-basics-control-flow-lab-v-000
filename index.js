// Write your code in this file!
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return 'This one is on me!'
  }
  else if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else {
    return 'No can do.'
  }
}

function ternaryCheckCity(destination){
  let answer
  destination === 'NYC' ? answer = 'Ok, sounds good.' : answer = 'No go.'
  return answer
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    case 'thanks for everything':
      return 'Bye.';
  }
}
