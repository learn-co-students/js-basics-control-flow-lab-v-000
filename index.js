// Write your code in this file!
function scuberGreetingForFeet(freeSample)  {
    let result;
    if (freeSample <= 400) {
      
      result = 'This one is on me!';
    } 
    else if (freeSample >= 2000) {
      result = 'I will gladly take your thirty bucks.';
    } 
    if (freeSample >= 2501) {
      result = 'No can do.';
      }
        return result;
      }
      
function ternaryCheckCity(cityDestination) {
  let result;
  if (cityDestination == 'NYC'); {
    result = 'Ok, sounds good.';
  } 
  if (cityDestination == 'Pittsburgh') {
    result = 'No go.';
  }
  return result;
}

function switchOnCharmFromTip(tip) {
  let result;
switch (tip) {
    case 'generous':
        result = 'Thank you so much.';
        break;
    case 'not as generous':
        result = 'Thank you.';
        break;
    case 'anything else':
      break;
        default:
        result = 'Bye.';
  }
  return result;
}