// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let result
  if (someValue <= 400) {
    result = 'This one is on me!';
  } else if (someValue > 2000) {
      result = 'I will gladly take your thirty bucks.';
      if (someValue > 2500){
        result = 'No can do.';
      }
  }
  return result
}

function ternaryCheckCity(city){
  let result = (city === 'NYC') ? 'Ok, sounds good.' : 'No go.'
  return result
}

function switchOnCharmFromTip(tip) {
  let response
  switch (tip) {
  case 'generous':
    response = 'Thank you so much.';
    break;
  case 'not as generous':
    response = 'Thank you.';
    break;
  default:
    response = 'Bye.'
  }
  return response

}
