// Write your code in this file!
function scuberGreetingForFeet(val) {
  let result
  if (val <= 400) {
    result = 'This one is on me!';
  }
  else if (val > 2000 && val < 2500) {
    result = 'I will gladly take your thirty bucks.';
  }
  else if (val > 2500) {
    result = 'No can do.';
  }
  return result;
}

function ternaryCheckCity(city) {
  let result
  city === 'NYC' ? (result = 'Ok, sounds good.') : (result = 'No go.')
  return result
}

function switchOnCharmFromTip(tip) {
  let result
  if (tip === 'generous') {
    result = 'Thank you so much.';
  }
  else if (tip === 'not as generous') {
    result = 'Thank you.';
  }
  else {
    result = 'Bye.';
  }
  return result;
}
