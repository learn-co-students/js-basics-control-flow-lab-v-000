// Write your code in this file!

function scuberGreetingForFeet (feet) {
    let message;
    if (feet <= 400) {
        message = 'This one is on me!'
    } else if (feet > 2000 && feet <= 2500) {
        message = 'I will gladly take your thirty bucks.'
    } else if (feet > 2500) {
        message = 'No can do.'
    }
    return message;
}

function ternaryCheckCity(city) {
  if (city === 'NYC') {
    return "Ok, sounds good."
  } else if (city !== 'NYC') {
    return "No go."
  }
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
    return "Thank you so much."
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
}
