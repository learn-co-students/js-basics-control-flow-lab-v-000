// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let greeting
  if (someValue <= 400) {
    greeting = 'This one is on me!'
  } else if (someValue > 2500) {
    greeting = 'No can do.'
  } else if (someValue > 2000) {
    greeting = 'I will gladly take your thirty bucks.'
  }
  return greeting
}

function ternaryCheckCity(city) {
  let greeting

  switch (city) {
    case 'NYC':
    greeting = 'Ok, sounds good.';
    break;
    default:
    greeting = 'No go.'
  }
  return greeting
}

function switchOnCharmFromTip(tip) {
  let greeting

  switch (tip) {
    case 'generous' :
    greeting = 'Thank you so much.'
    break

    case 'not as generous' :
    greeting = 'Thank you.'
    break

    default:
    greeting = 'Bye.'
  }
  return greeting
}
