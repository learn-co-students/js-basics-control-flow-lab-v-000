// Write your code in this file!
let distance;

function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return 'This one is on me!';
  } else if (distance > 2000){

    if (distance > 2500) {
      return 'No can do.'
    } else {
      return 'I will gladly take your thirty bucks.'
    }

  }
}

let city;

function ternaryCheckCity(city) {
  if (city === 'NYC') {
    return 'Ok, sounds good.'
  } else {
    return 'No go.'
  }
}

let tip;

function switchOnCharmFromTip(tip) {
  if (tip === 'generous') {
    return 'Thank you so much.'
  } else if (tip === 'not as generous') {
    return 'Thank you.'
  } else {
    return 'Bye.'
  }
}
