// Write your code in this file!

function scuberGreetingForFeet(feet) {
    if (feet <= 400) {
      return 'This one is on me!';
    }
    else if (feet > 2500) {
      return 'No can do.';
    }
    else if (feet > 2000) {
      return 'I will gladly take your thirty bucks.';
    }
}


function ternaryCheckCity(city) {
  let msg = (city === 'NYC') ? 'Ok, sounds good.' : "No go."
  return msg;
}


function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'not as generous':
      return 'Thank you.';
    case 'generous':
      return 'Thank you so much.';
    default:
      return 'Bye.';
  }
}
